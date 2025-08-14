import { nextTick } from 'vue'
import { isArray, isNumber } from './is'

/**
 * rpx 换算为 px
 * @param upx
 */
export const rpx2px = (upx: number) => {
  return uni.upx2px(upx)
}

/**
 * px 换算为 rpx
 * @param px
 */
export const px2rpx = (px: number) => {
  return px / (uni.upx2px(100) / 100)
}

/** 解决存在tab 快速切换，导致数据没有及时更新 */
export const debounceOnRefresh = (fn: Function) => {
  try {
    uni.showLoading({ title: '加载中', mask: true })
    nextTick(() => {
      fn()
      uni.pageScrollTo({ scrollTop: 0 })
      setTimeout(() => {
        uni.hideLoading()
      }, 1000)
    })
  } catch (e) {
    uni.hideLoading()
  }
}

export const selectorQueryClientRect = (selector: string): Promise<UniApp.NodeInfo> =>
  new Promise((resolve) => {
    nextTick(() => {
      const query = uni.createSelectorQuery()
      query
        .select(selector)
        .boundingClientRect((res) => {
          resolve(res as any)
        })
        .exec()
    })
  })

/**
 * 查询元素大小
 *
 * @export
 * @param {string} name
 * @param {*} scope
 * @returns
 */
export function selectRect(name: string, scope: any): Promise<UniApp.NodeInfo> {
  return new Promise((resolve) => {
    nextTick(() => {
      const query = uni.createSelectorQuery().in(scope)
      query
        .select(name)
        .boundingClientRect((res) => {
          resolve(res as UniApp.NodeInfo)
        })
        .exec()
    })
  })
}

export const base64ToBlob = function (code: any) {
  const parts = code.split(';base64,')
  const contentType = parts[0].split(':')[1]
  const raw = window.atob(parts[1])
  const rawLength = raw.length
  const uInt8Array = new Uint8Array(rawLength)
  for (let i = 0; i < rawLength; ++i) {
    uInt8Array[i] = raw.charCodeAt(i)
  }
  return new Blob([uInt8Array], {
    type: contentType
  })
}
// 解析rpx
export function parseRpx(val: any): string {
  return isArray(val) ? val.map(parseRpx).join(' ') : isNumber(val) ? `${val}rpx` : val
}

/** 切割 文字包含的手机号码或者包含固定号码，数组 */
export function extractPhone(text?: string) {
  if (!text) return []
  // 匹配手机号码和固定号码的正则表达式
  const numberPattern = /\b\d{11}\b|\b\d{3}-\d{8}|\d{4}-\d{7}\b/g

  // 使用正则表达式进行匹配
  const matches: any = text.match(numberPattern)

  // 如果没有匹配到，返回原始字符串
  if (!matches) {
    return [{ text, isPhone: false }]
  }

  // 利用正则表达式将字符串切割成数组
  const parts: any = text.split(numberPattern)

  // 合并匹配到的号码和切割的部分
  const result: string[] = []
  for (let i = 0; i < parts.length; i++) {
    result.push(parts[i])
    if (i < matches.length) {
      result.push(matches[i])
    }
  }

  // 过滤掉空字符串
  const list = result.filter((part) => part.trim() !== '')

  return list?.map((it) => ({ text: it, isPhone: (it.match(numberPattern) ?? [])?.length > 0 }))
}
