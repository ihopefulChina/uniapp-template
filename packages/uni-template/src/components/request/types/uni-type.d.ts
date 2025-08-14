import { ICommoRequestConfig, IRequestOption } from '.'
import { Method, RequestOptions, SuccessCallbackResult } from './request'

// Uni Types
export interface IUniRequestConfig extends Omit<UniNamespace.RequestOptions, 'header' | 'success' | 'fail'>, ICommoRequestConfig, IRequestOption {
  params?: {
    [i: string]: any
  }
  [i: string]: any
}

export interface IUniResponse<T = any> extends Omit<UniNamespace.RequestSuccessCallbackResult, 'data'> {
  config: IUniRequestConfig
  href: string
  data: T
}
export type IUniRequestInterceptor<T = IUniRequestConfig> = (config: T) => T | Promise<T>
export type IUniResponseInterceptor<T extends IUniResponse = IUniResponse> = (response: T) => T | Promise<T>
