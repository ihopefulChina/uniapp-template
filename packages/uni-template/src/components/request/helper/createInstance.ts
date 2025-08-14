import { IUniRequestConfig } from '../types/uni-type'
import { IRequestOption } from '../types'
import UniRequest from '../core/uniRequest'
import FetchRequest from '../core/FetchRequest'
import { bind } from './bind'
import { extendByOwnPropertyNames, extend } from '../core/utils'

/**
 *
 * @param config 创建实例
 */
export function createInstance<C extends IRequestOption | IUniRequestConfig, R extends typeof FetchRequest | typeof UniRequest>(
  config: C,
  Request: R,
  ignores: string[] = []
) {
  const context = new Request(config as any)
  const instance = bind(Request.prototype.request, context)

  extendByOwnPropertyNames(instance, Request.prototype, context, ignores)
  extend(instance, context) // 实例函数属性继承
  return instance as any
}
