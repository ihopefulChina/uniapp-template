import { ITaroRequestConfig } from '../types/taro-type';
import { IRequestConfig } from '../types/fetch-type';

/**
 * 将url格式化为绝对路径。
 * https:// www.xxx.com/path/to/request
 * 或者
 * /path/to/request
 *
 * @export
 * @param {string} url
 * @param {string} baseUrl
 * @returns
 */
export function normalizationUrl(url: string, baseUrl = '') {
    const pathReg = /^https{0,1}:\/\//;
    // 如果路径已经是绝对路径。直接返回
    if (pathReg.test(url)) {
        return url;
    }

    const requestUrl = /^\//.test(url) ? url : `/${url}`;
    let requestBaseUrl = baseUrl;

    // 没有基础路径。直接返回
    if (!baseUrl) {
        return requestUrl;
    }

    // 基础路径不符合规则。则不拼接返回
    if (!pathReg.test(requestBaseUrl) && !/([/0-9a-zA-Z.]+)/.test(requestBaseUrl)) {
        return requestUrl;
    }

    if (baseUrl[baseUrl.length - 1] === '/') {
        requestBaseUrl = baseUrl.replace(/\/$/, '');
    }

    return requestBaseUrl + requestUrl;
}

/**
 *
 *
 * @export
 * @param {string} url
 * @param {{ [i: string]: any }} [params={}]
 * @returns
 */
export function jointQuery(url: string, params: { [i: string]: any } = {}) {
    // 是否携带query
    const query = Object.keys(params)
        .filter((key) => ![undefined, null].includes(params[key])) // 排除掉无效值
        .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
        .join('&');

    if (!query) {
        return url;
    }
    return url + (url.search(/\?/) === -1 ? '?' : '&') + query;
}

/**
 * 解析并替换url中的动态参数
 *
 * @param {string} [path='']
 * @param {*} params
 * @returns
 */
export function paserDynamicPath(config: IRequestConfig | ITaroRequestConfig) {
    const { urlMatch = {} } = config;
    let url = config.url;
    const keys = Object.keys(urlMatch);

    if (keys.length) {
        keys.forEach((key) => {
            const dyReg = new RegExp(`:${key}`, 'g');
            if (dyReg.test(url)) {
                url = url.replace(dyReg, urlMatch[key]);
            }
        });
    }

    return url;
}

function isArray(val: any) {
    return Object.prototype.toString.call(val) === '[object Array]';
}

export function forEach(obj: any, fn: any) {
    // Don't bother if no value provided
    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    // Force an array if not already something iterable
    if (typeof obj !== 'object') {
        /* eslint no-param-reassign:0 */
        obj = [obj];
    }

    if (isArray(obj)) {
        // Iterate over array values
        for (let index = 0, la = obj.length; index < la; index++) {
            // eslint-disable-next-line no-useless-call
            fn.call(null, obj[index], index, obj);
        }
    } else {
        // Iterate over object keys
        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                // eslint-disable-next-line no-useless-call
                fn.call(null, obj[key], key, obj);
            }
        }
    }
}

/**
 * 继承绑定
 * @param target
 * @param obj
 * @param thisArg
 */
export function extend(target: any, obj: any, thisArg?: any) {
    forEach(obj, (val: any, key: string) => {
        if (thisArg && typeof val === 'function') {
            target[key] = val.bind(thisArg);
        } else {
            target[key] = val;
        }
    });
    return target;
}

export function extendByOwnPropertyNames(target: any, obj: any, thisArg?: any, ignoreKeys: string[] = []) {
    const ignores = ['constructor', ...ignoreKeys];
    // console.log(Object.getOwnPropertyNames(obj))
    Object.getOwnPropertyNames(obj)
        .filter((key) => ignores.indexOf(key) === -1)
        .forEach((key) => {
            const val = obj[key];
            if (thisArg && typeof val === 'function') {
                target[key] = val.bind(thisArg);
            } else {
                target[key] = val;
            }
        });
    return target;
}
/**
 * 删除某个对象的key
 * @param obj
 * @param key
 */
export function deleteKey(obj: any, key: string) {
    const ob: any = {};
    Object.keys(obj).forEach((ke) => {
        if (ke !== key) {
            ob[ke] = obj[ke];
        }
    });

    return ob;
}
