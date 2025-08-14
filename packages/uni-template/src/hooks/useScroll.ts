import { nextTick, ref } from 'vue'
import { IOptionItem } from '~/enums/type'
import { useSystemInfo } from '~/state/useSystemInfo'
import { selectorQueryClientRect } from '~/utils/uniApi'

interface IUseScrollOptions {
  /** 修改tab 阈值 */
  scrollNum?: number
  /** 修改 tab */
  changeTab: (tab: any) => void
}
interface IHeightRefItem {
  value: string
  scrollTop: number
}

export const useScroll = ({ scrollNum = 40, changeTab }: IUseScrollOptions) => {
  const systemInfo = useSystemInfo()
  const topHeight = systemInfo?.navHeight + 60

  /** 是否吸顶 */
  const isSticky = ref<boolean>(false)

  /** 整体高度合集 */
  const scrollTopRef = ref<IHeightRefItem[]>()
  const heightRef = ref<any>()
  const topsRef = ref<any>()

  /** 锁 */
  const lockRef = ref<boolean>(false)

  /** 重置 */
  const rest = () => {
    scrollTopRef.value = undefined
    heightRef.value = undefined
    topsRef.value = undefined
    isSticky.value = false
  }

  /** 计算高度 */
  const monitorScroll = async (list: IOptionItem[]) => {
    await rest()
    nextTick(async () => {
      const detailRectInfo = await selectorQueryClientRect('.detail')
      const newHeightList: IHeightRefItem[] = []
      const newHeightRef: any = {}
      Promise.all(
        (list ?? []).map(async (item, index) => {
          if (item?.value) {
            const rectInfo = await selectorQueryClientRect(`#${item?.value}`)
            newHeightList.push({ value: item?.value, scrollTop: (rectInfo?.top ?? 0) - (detailRectInfo?.top ?? topHeight) })

            newHeightRef[item?.value] = rectInfo?.height || 0

            if (index === list?.length - 1) {
              topsRef.value = getTopsObj(newHeightRef)
            }
          }
        })
      )
      heightRef.value = newHeightRef
      scrollTopRef.value = newHeightList
    })
  }
  const getTopsObj = (newHeightRef: any) => {
    const obj: any = {}
    let height = topHeight

    // eslint-disable-next-line guard-for-in
    for (const key in newHeightRef) {
      height += newHeightRef[key]
      obj[key] = height + 10
    }
    return obj
  }

  /** 监听滑动 */
  const pageScroll = (scrollTop: number) => {
    isSticky.value = scrollTop > scrollNum
    if (lockRef?.value) return
    const list = scrollTopRef?.value ?? []

    for (let idx = list.length - 1; idx >= 0; idx--) {
      const item = list[idx]
      const itemNext = list[idx + 1]

      if (scrollTop >= (item?.scrollTop ?? 0) && (scrollTop < (itemNext?.scrollTop || 0) || idx + 1 === list?.length)) {
        changeTab(item?.value)
        break
      }
    }
  }

  /** onScrollTo */
  const onScrollTo = (type: any) => {
    changeTab(type)
    lockRef.value = true

    uni.pageScrollTo({
      scrollTop: (topsRef?.value?.[type] ?? 0) - (heightRef?.value?.[type] ?? 0) - topHeight,
      duration: 200,
      success: () => {
        setTimeout(() => {
          lockRef.value = false
        }, 500)
      }
    })
  }

  return { isSticky, pageScroll, monitorScroll, onScrollTo }
}
