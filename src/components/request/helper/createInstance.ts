import { ITaroRequestConfig } from '../types/taro-type';
import { IRequestOption } from '../types';
import TaroRequest from '../core/uniRequest';
import FetchRequest from '../core/FetchRequest';
import { bind } from './bind';
import { extendByOwnPropertyNames, extend } from '../core/utils';

/**
 *
 * @param config 创建实例
 */
export function createInstance<C extends IRequestOption | ITaroRequestConfig, R extends typeof FetchRequest | typeof TaroRequest>(
    config: C,
    Request: R,
    ignores: string[] = []
) {
    const context = new Request(config as any);
    const instance = bind(Request.prototype.request, context);

    extendByOwnPropertyNames(instance, Request.prototype, context, ignores);
    extend(instance, context); // 实例函数属性继承
    return instance as any;
}
