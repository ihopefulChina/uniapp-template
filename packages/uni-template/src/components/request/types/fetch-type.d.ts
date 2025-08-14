import { ICommoRequestConfig, IRequestOption } from '.'

export interface IRequestConfig extends Omit<RequestInit, 'body' | 'headers'>, ICommoRequestConfig, IRequestOption {
  /**
   * url
   */
  url: string
  /**
   * fetch body。 用于抹平参数差异。
   */
  data?: BodyInit | null | Record<string, any>
}

export interface IResponseCommon<T = any> {
  config: IRequestConfig
  data: T
  href: string
}
export type IResponse<T = any> = Pick<Response, 'status' | 'ok' | 'statusText' | 'headers' | 'type' | 'url' | 'redirected'> & IResponseCommon<T>

export type IRequestInterceptor = (config: IRequestConfig) => IRequestConfig | Promise<IRequestConfig>
export type IResponseInterceptor<T = any> = (response: IResponse<T>) => IResponse<T> | Promise<IResponse<T>>
