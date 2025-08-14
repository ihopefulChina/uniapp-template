import { IRequestConfig, IRequestInterceptor, IResponseInterceptor, IResponse } from '../types/fetch-type'
import { IUniRequestConfig, IUniRequestInterceptor, IUniResponseInterceptor, IUniResponse } from '../types/uni-type'
import { IRequestOption, ISkipInterceptor } from '../types'
import InterceptorManager from './InterceptorManager'
import { paserDynamicPath } from './utils'

type Config = IRequestConfig | IUniRequestConfig
type RequestInterceptor = IRequestInterceptor | IUniRequestInterceptor
type ResponseInterceptor = IResponseInterceptor | IUniResponseInterceptor

export default class BaseRequest<T extends RequestInterceptor, K extends ResponseInterceptor> {
  defaults: IRequestOption = {}

  requestInterceptors = new InterceptorManager<T>()

  responseInterceptors = new InterceptorManager<K>()

  constructor(config: IRequestOption = {}) {
    this.defaults = { ...this.defaults, ...config }
  }

  protected setConfig<T extends Config>({ data, ...rest }: T, initContentType = true) {
    const mergedConfig = this.mergeDeep<T>({}, this.defaults, rest) // 与默认值进行合并
    mergedConfig.method = (mergedConfig.method || 'GET').toUpperCase() // 设置默认值
    mergedConfig.headers = mergedConfig.headers || {} // 设置默认headers Content-Type
    if (initContentType) {
      mergedConfig.headers['Content-Type'] = mergedConfig.headers['Content-Type'] || 'application/json'
    }

    if (data) {
      mergedConfig.data = data
    }

    // 替换动态路径
    if (mergedConfig.urlMatch) {
      mergedConfig.url = paserDynamicPath(mergedConfig)
    }

    return mergedConfig
  }

  /**
   * Simple object check.
   * @param item
   * @returns {boolean}
   */
  protected isObject(item: any) {
    return item && typeof item === 'object' && !Array.isArray(item)
  }

  /**
   * 深合并
   * @param target
   * @param ...sources
   */
  protected mergeDeep<T>(target: any, ...sources: any[]): T {
    if (!sources.length) return target
    const source = sources.shift()

    if (this.isObject(target) && this.isObject(source)) {
      for (const key in source) {
        if (this.isObject(source[key])) {
          if (!target[key]) Object.assign(target, { [key]: {} })
          this.mergeDeep(target[key], source[key])
        } else {
          Object.assign(target, { [key]: source[key] })
        }
      }
    }

    return this.mergeDeep(target, ...sources)
  }

  /**
   * 处理前置请求拦截器
   * @param config
   */
  protected handleRequestInterceptor<T extends Config>(config: T) {
    const promise = Promise.resolve(config)

    if (this.isSkipRequestInterceptor(config.skipInterceptor)) {
      // console.log(`${config.url}跳过请求拦截器`, config.skipInterceptor)
      return promise
    }
    return this.requestInterceptors.getAllHandler().reduce((pre, cur: any) => {
      return pre.then(cur.fulfilled, cur.rejected)
    }, promise)
  }

  /**
   * 处理后置拦截器
   * @param res
   */
  protected handleResponseInterceptor<T extends IResponse | IUniResponse>(res: T) {
    const promise = Promise.resolve(res)

    if (this.isSkipResponseInterceptor(res.config.skipInterceptor)) {
      // console.log(`${res.config.url}跳过响应拦截器`, res.config.skipInterceptor)
      return promise
    }

    return this.responseInterceptors.getAllHandler().reduce((pre, now: any) => {
      const catchFn = () => {
        throw res
      }
      return pre.then(now.fulfilled).catch(now.rejected || catchFn)
    }, promise)
  }

  /**
   * 解析获取Fetch Api下的数据
   * @param response
   */
  protected async getFetcchResponseData(response: Response) {
    const text = await response.text()
    return this.paseTextData(text)
  }

  /**
   * pase 文本数据
   * @param text 文本
   */
  protected paseTextData(text: string) {
    let data: any = text
    if (/^[\[\{"]/.test(text)) {
      try {
        data = JSON.parse(text)
      } catch (error) {
        data = 'JSON parse 失败'
      }
    }
    return data
  }

  private isSkipRequestInterceptor(skip?: ISkipInterceptor) {
    return skip === true || skip === 'request'
  }

  private isSkipResponseInterceptor(skip?: ISkipInterceptor) {
    return skip === true || skip === 'response'
  }
}
