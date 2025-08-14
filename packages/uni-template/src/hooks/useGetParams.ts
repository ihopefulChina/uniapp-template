/**
 * 另外一种获取页面参数的方式
 * 因为组件不能使用onLoad，所以需要使用这种方式获取页面参数
 */
export function useGetParams<T>(): T {
  /** 获取当前页面参数 */
  const pages = getCurrentPages()
  /** 获取当前页面 */
  const currentPage = pages[pages.length - 1] as { options: T }
  /** 获取当前页面参数 */
  const options = currentPage?.options || {}

  return options as T
}
