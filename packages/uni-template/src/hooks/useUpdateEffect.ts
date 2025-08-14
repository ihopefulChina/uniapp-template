import { watch, ref } from 'vue'
/**
 *
 * 思路参考
 *  useUpdateEffect 用法等同于 useEffect，但是会忽略首次执行，只在依赖更新时执行。
 *  @use https://ahooks.js.org/zh-CN/hooks/use-update-effect
 */
export function useUpdateEffect(effect: Function, deps: any[], options?: any) {
  const isFirst = ref(true)
  watch(
    deps,
    (...args) => {
      if (isFirst.value) {
        isFirst.value = false
        return
      }
      effect(...args)
    },
    options
  )
}
