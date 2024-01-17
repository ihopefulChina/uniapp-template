/* eslint-disable no-console */
/**
 * request实例。此入口基于uni.request api进行封装。支持uni端使用
 */

import TaroRequest from './core/uniRequest';
import { ITaroRequestConfig, ITaroResponse } from './types/taro-type';
import { IRequestOption } from './types';
import { createInstance } from './helper/createInstance';
import { normalizationUrl } from './core/utils';
export interface ITaroInstance extends Omit<TaroRequest, 'request'> {
    create: (config?: IRequestOption) => ITaroInstance;

    <T>(config: ITaroRequestConfig): Promise<ITaroResponse<T>>;
}

function create(config: IRequestOption = {}) {
    const ins = createInstance(config, TaroRequest, ['getErrorData']) as ITaroInstance;
    ins.create = create;
    return ins;
}

const instance = create();

export default instance;

/** 合并函数 */
function merge(callback: any, delay = 200) {
    let promise: Promise<any> | null;
    let timeout: any;
    let resloveHandle: any;
    let state = 0;

    return (...params: any[]) => {
        if (timeout) {
            clearTimeout(timeout);
        }

        if (state === 0) {
            timeout = setTimeout(async () => {
                state = 1;
                const result = await callback(...params);
                resloveHandle(result);
                promise = null;
                state = 0;
            }, delay);
        }

        if (!promise) {
            promise = new Promise((resolve) => {
                resloveHandle = resolve;
            });
        }

        return promise;
    };
}

const getToken = merge(async (url: string) => {
    const { code } = await uni.login();
    const data = await instance.get(url, { code, type: 0 }).then((res: any) => {
        return res?.data as any;
    });
    return data;
});

/**
 * 请求统一携带token
 *
 * 给发出的请求头携带token信息。
 * 如果没有token。如果是静默登录 则获取最新的token并存储在storage中
 * @param config
 * @param param1
 * @returns
 */
export async function takeTokenRequestInterceptor(config: ITaroRequestConfig, { silentAuthorization, silentAuthorizationUrl }: { silentAuthorization: boolean; silentAuthorizationUrl: string }) {
    let token = uni.getStorageSync('token');
    // 静默授权
    if (!token && silentAuthorization) {
        const fetchUrl = normalizationUrl(silentAuthorizationUrl, config.baseUrl);
        const { data } = await getToken(fetchUrl);
        token = data?.token; // 赋值token

        uni.setStorageSync('token', token);
        uni.setStorageSync('userInfo', data);
    }

    config.headers = { ...config.headers, Authorization: token };
    return config;
}

interface IResOption {
    /** 是否打印接口log */
    log?: boolean;

    silentAuthorization: boolean;

    loginUrl: string;

    instance: any;
    /** 授权登录 */
    authorizationLogin: any;
}

/**
 * 响应拦截器
 *
 * 配置是否打印请求
 * 过期token自动重新发起请求
 * 异常请求统一处理
 * @param res 接口响应
 * @param option 选项
 * @returns
 */

export async function requestInterceptorHanlder(res: any, option: IResOption) {
    const { config, statusCode, data = {} } = res;
    const { log, silentAuthorization, instance, authorizationLogin } = option;
    let description: string | null = null;
    // 打印请求log
    if (log) {
        const { url, method, baseUrl, params = {} } = config;
        console.log('--------');
        console.log(`【${method}】${normalizationUrl(url, baseUrl)}`);
        Object.keys(params).length && console.log('query', params);
        config.data && console.log('data', config.data);
        console.log('response', data);
        console.log('--------');
    }

    // token过期或者无权限等 清空token
    if ([403, 10004, 10002, 401].indexOf(data.code) !== -1) {
        const oldToken = uni.getStorageSync('token');
        uni.removeStorageSync('token');
        uni.removeStorageSync('userInfo');
        // 如果静默登录且token存在 则重新发请求获取code
        if (silentAuthorization && oldToken) {
            return instance(config);
        }
        // 如果不是静默登录 则跳转至登录
        onLoginLock(() => authorizationLogin?.());
        throw new Error();
    } else if ([99999, 40003].indexOf(data.code) !== -1) {
        /** 不要觉得奇怪，后端把登录和禁用 都是用一个 code 40003 来处理  */
        if (['请重新登录', '请重新登陆'].includes(data?.msg)) {
            onLoginLock(() => authorizationLogin?.());
            throw new Error();
        }

        onLoginLock(() =>
            uni.showModal({
                title: '抱歉',
                content: '该账号已被禁用，无法登录',
                showCancel: false,
                confirmColor: '#497cd8',
                success: () => {
                    authorizationLogin?.();
                },
            })
        );

        throw new Error();
    } else if ([10005].indexOf(data.code) !== -1) {
        return res.data;
    } else if ((data.code !== undefined && data.code !== 0 && data.code !== 200) || statusCode !== 200) {
        description = data.msg || data?.message || data?.error?.message || 'unknown error';
        // // #ifdef APP-PLUS
        // if (data?.error?.message === '网络连接失败！请检查网络！' && statusCode === 500) {
        //     /** 没有网络 */
        //     uni.showModal({
        //         title: '网络连接失败',
        //         content: '关闭无线数据时，部分功能可能无法使用，请允许应用使用无线数据',
        //         confirmColor: '#497cd8',
        //         confirmText: '前往设置',
        //         success: (res) => {
        //             if (res.confirm) {
        //                 gotoAppPermissionSetting();

        //                 // plus.runtime.openURL("package:");
        //             } else if (res.cancel) {
        //                 // plus.runtime.openURL('package:');
        //                 console.log('用户点击取消');
        //             }
        //         },
        //     });

        //     return;
        // }
        // // #endif
    }

    if (description !== null) {
        const { errorToast = true } = config;
        errorToast && uni.showToast({ icon: 'none', title: description });
        throw new Error();
    }

    return res.data;
}
/** 给跳转登录加一个锁 */
const onLoginLock = (fn: Function) => {
    if (!uni.getStorageSync('loginLock')) {
        setTimeout(async () => {
            await fn?.();
            uni.removeStorageSync('loginLock');
        }, 500);
        uni.setStorageSync('loginLock', true);
    }
};
