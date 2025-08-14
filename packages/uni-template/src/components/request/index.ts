/**
 * request实例。此入口基于fetch api进行封装。支持web、RN端使用
 */
import FetchRequest from './core/FetchRequest'
import { IRequestConfig, IResponse } from './types/fetch-type'
import { IRequestOption } from './types'
import { createInstance } from './helper/createInstance'

export interface IInstance extends Omit<FetchRequest, 'request'> {
  create(config?: IRequestOption): IInstance
  <T>(config: IRequestConfig): Promise<IResponse<T>>
}

function create(config: IRequestOption = {}) {
  const ins = createInstance(config, FetchRequest, ['request', 'mergeResponse', 'getErrorResponse', 'getResponseData']) as IInstance
  ins.create = create
  return ins
}

const instance = create()

export default instance

/**
 * 请求统一携带token
 *
 * 给发出的请求头携带token信息。
 * @param config
 * @param param1
 * @returns
 */
export async function takeTokenRequestInterceptor(config: IRequestConfig) {
  const Authorization = window.localStorage.getItem('Authorization')
  if (Authorization) {
    config.headers = { ...config.headers, Authorization }
  }
  return config
}

interface IResOption {
  notification: any

  message: any

  history: any

  loginUrl: string
}

/**
 * 响应拦截器
 *
 * 异常请求统一处理
 * @param res 接口响应
 * @param option 选项
 * @returns
 */
export async function requestInterceptorHanlder(res: any, option: IResOption) {
  const { status, data = {} } = res
  let description: string | null = null

  if (status === 403 || data.code === 403) {
    // 没有权限
    option.message.warn(data.msg || '无权访问该资源')
    description = ''
  } else if (data.code === 401 || data.code === 40003) {
    // 未登录 或者 用户token过期、错误
    if (!/\/login\?/.test(window.location.pathname)) {
      option.history.replace({ pathname: option.loginUrl })
    }
    description = ''
  } else if (status !== 200 || data.code !== 0) {
    description = data.msg
  }

  if (description !== null) {
    if (description) {
      option.notification.error({ message: description })
    }
    throw new Error()
  }

  return res.data
}
