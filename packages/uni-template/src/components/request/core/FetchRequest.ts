/* eslint-disable max-nested-callbacks */
import { IRequestInterceptor, IResponseInterceptor, IRequestConfig, IResponse, IResponseCommon } from '../types/fetch-type'
import { normalizationUrl, jointQuery } from './utils'
import BaseRequest from './BaseRequest'
import { IRequestOption, IRequestParams } from '../types'

export default class FetchRequest extends BaseRequest<IRequestInterceptor, IResponseInterceptor> {
  constructor(config: IRequestOption = {}) {
    super(config)
  }

  /**
   * 基于Fetch api的请求实现
   * @param config
   */
  async request<T = any>(config: IRequestConfig): Promise<IResponse<T>> {
    const mergedConfig = this.setConfig(config, !config.data)

    const responseConfig = await this.handleRequestInterceptor(mergedConfig) // 处理前置请求拦截器
    const requestConfig = this.convertConfig(responseConfig)

    const { params = {}, url = '', ...rest } = requestConfig

    let fetchUrl = normalizationUrl(url, requestConfig.baseUrl)
    fetchUrl = jointQuery(fetchUrl, params)

    let res: Response & { config: IRequestConfig }
    try {
      res = (await fetch(fetchUrl, rest)) as any
    } catch (error) {
      res = this.getErrorResponse(error) as any
    }

    const data = await this.getFetcchResponseData(res) // 获取数据
    const resobj = this.mergeResponse(res, { data, config: responseConfig, href: fetchUrl }) // 合并响应数据

    return this.handleResponseInterceptor(resobj).catch(() => {
      throw resobj
    })
  }

  /**
   * get
   * @param url
   * @param params
   * @param config
   */
  public get<T = any>(url: string, params?: IRequestParams, config?: Omit<IRequestConfig, 'url' | 'params' | 'method'>) {
    return this.request<T>({ method: 'GET', url, params, ...config })
  }

  /**
   * delete
   * @param url
   * @param config
   */
  public delete<T = any>(url: string, config?: Omit<IRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ method: 'DELETE', url, ...config })
  }

  /**
   * head
   * @param url
   * @param config
   */
  public head<T = any>(url: string, config?: Omit<IRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ method: 'HEAD', url, ...config })
  }

  /**
   * options
   * @param url
   * @param config
   */
  public options<T = any>(url: string, config?: Omit<IRequestConfig, 'url' | 'method'>) {
    return this.request<T>({ method: 'OPTIONS', url, ...config })
  }

  /**
   * put
   * @param url
   * @param config
   */
  public put<T = any>(url: string, data?: IRequestConfig['data'], config?: Omit<IRequestConfig, 'url' | 'data' | 'method'>) {
    return this.request<T>({ method: 'PUT', url, data, ...config })
  }

  /**
   * patch
   * @param url
   * @param config
   */
  public patch<T = any>(url: string, data?: IRequestConfig['data'], config?: Omit<IRequestConfig, 'url' | 'data' | 'method'>) {
    return this.request<T>({ method: 'PATCH', url, data, ...config })
  }

  /**
   * post
   * @param url
   * @param data
   * @param config
   */
  public post<T = any>(url: string, data?: IRequestConfig['data'], config?: Omit<IRequestConfig, 'url' | 'data' | 'method'>) {
    return this.request<T>({ method: 'POST', url, data, ...config })
  }

  private mergeResponse<T = any>(response: Response, data: IResponseCommon<T>): IResponse<T> {
    const { status, statusText, ok, headers, type, url, redirected } = response
    return {
      ...data,
      status,
      ok,
      statusText,
      headers,
      type,
      url,
      redirected
    }
  }

  private getErrorResponse(error: any) {
    // 如果是Response实例则直接返回即可
    if (typeof error.text === 'function') {
      return error
    }
    return new Response(JSON.stringify({ error: { message: 'response fail' } }), {
      status: 500,
      statusText: 'response fail'
    })
  }

  private convertConfig(config: IRequestConfig) {
    const obj: any = {}
    Object.keys(config).forEach((key) => {
      let value = config[key]
      // 将data属性赋值给原生body上
      if (key === 'data') {
        if (!(value instanceof FormData) && !(value instanceof Blob) && !(value instanceof URLSearchParams)) {
          if (typeof value === 'string') {
            value = `"${value}"`
          } else {
            value = JSON.stringify(value)
          }
        }
        obj.body = value
      } else {
        obj[key] = value
      }
    })
    return obj
  }
}
