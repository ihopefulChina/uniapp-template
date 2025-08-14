import Taro from '../../index'

type IAnyObject = Record<string, any>
interface CallbackResult {
  /** 错误信息 */
  errMsg: string
}
type RequestCache = 'default' | 'force-cache' | 'no-cache' | 'no-store' | 'only-if-cached' | 'reload'

export interface RequestOptions<T = any, U extends string | IAnyObject | ArrayBuffer = any | any> {
  /** 开发者服务器接口地址 */
  url: string
  /** 请求的参数 */
  data?: U
  /** 设置请求的 header，header 中不能设置 Referer。
   *
   * `content-type` 默认为 `application/json`
   */
  header?: IAnyObject
  /** 超时时间，单位为毫秒
   * @default 60000
   * @supported weapp, h5, tt, alipay, rn
   */
  timeout?: number
  /** HTTP 请求方法
   * @default "GET"
   */
  method?: keyof Method
}

/** HTTP 请求方法 */
/** HTTP 请求方法 */
export type Method = 'OPTIONS' | 'GET' | 'HEAD' | 'POST' | 'PUT' | 'PATCH' | 'DELETE' | 'TRACE' | 'CONNECT'

export interface SuccessCallbackResult<T extends string | IAnyObject | ArrayBuffer = any | any> extends CallbackResult {
  /** 开发者服务器返回的数据 */
  data: T
  /** 开发者服务器返回的 HTTP Response Header */
  header: IAnyObject
  /** 开发者服务器返回的 HTTP 状态码 */
  statusCode: number
  /** 调用结果 */
  errMsg: string
  /** cookies */
  cookies?: string[]
}
