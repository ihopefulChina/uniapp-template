import { normalizationUrl, jointQuery } from './utils';
import BaseRequest from './BaseRequest';
import { ITaroRequestInterceptor, ITaroResponseInterceptor, ITaroRequestConfig, ITaroResponse } from '../types/taro-type';
import { IRequestOption, IRequestParams } from '../types';

export default class TaroRequest extends BaseRequest<ITaroRequestInterceptor, ITaroResponseInterceptor<any>> {
    constructor(config: IRequestOption = {}) {
        super(config);
    }

    /**
     * 基于Taro request api的请求实现
     * @param config
     */
    async request<T = any>(config: ITaroRequestConfig) {
        const mergedConfig = this.setConfig(config);

        const responseConfig = await this.handleRequestInterceptor(mergedConfig); // 处理前置请求拦截器
        const requestConfig = this.convertConfig(responseConfig);

        const { params = {}, url = '', ...rest } = requestConfig;

        let fetchUrl = normalizationUrl(url, mergedConfig.baseUrl);
        fetchUrl = jointQuery(fetchUrl, params);

        let response: ITaroResponse<T>;
        try {
            response = (await uni.request({ ...rest, url: fetchUrl })) as any;
        } catch (error) {
            response = (await this.getErrorData(error)) as any;
        }

        response.config = responseConfig;
        response.href = fetchUrl;

        return this.handleResponseInterceptor(response).catch(() => {
            throw response;
        });
    }

    /**
     * get
     * @param url
     * @param params
     * @param config
     */
    public get<T = any>(url: string, params?: IRequestParams, config?: Omit<ITaroRequestConfig, 'url' | 'params' | 'method'>) {
        return this.request<T>({ method: 'GET', url, params, ...config });
    }

    /**
     * delete
     * @param url
     * @param config
     */
    public delete<T = any>(url: string, config?: Omit<ITaroRequestConfig, 'url' | 'method'>) {
        return this.request<T>({ method: 'DELETE', url, ...config });
    }

    /**
     * head
     * @param url
     * @param config
     */
    public head<T = any>(url: string, config?: Omit<ITaroRequestConfig, 'url' | 'method'>) {
        return this.request<T>({ method: 'HEAD', url, ...config });
    }

    /**
     * options
     * @param url
     * @param config
     */
    public options<T = any>(url: string, config?: Omit<ITaroRequestConfig, 'url' | 'method'>) {
        return this.request<T>({ method: 'OPTIONS', url, ...config });
    }

    /**
     * put
     * @param url
     * @param config
     */
    public put<T = any, U extends string | ArrayBuffer = any | any>(url: string, data?: U, config?: Omit<ITaroRequestConfig, 'url' | 'data' | 'method'>) {
        return this.request<T>({ method: 'PUT', url, data, ...config });
    }

    // /**
    //  * patch 小程序不支持patch
    //  * @param url
    //  * @param config
    //  */
    // public patch<T = any>(url: string, data?: BodyInit | null, config?: Omit<ITaroRequestConfig, 'url' | 'data' | 'method'>) {
    //   return this.request<T>({ method: 'PATCH', url, data, ...config })
    // }

    /**
     * post
     * @param url
     * @param data
     * @param config
     */
    public post<T = any, U extends string | ArrayBuffer = any | any>(url: string, data?: U, config?: Omit<ITaroRequestConfig, 'url' | 'data' | 'method'>) {
        return this.request<T>({ method: 'POST', url, data, ...config });
    }

    private async getErrorData(res: any) {
        // 判断是不是h5环境
        if (typeof res.text === 'function') {
            const data = await this.getFetcchResponseData(res); // 获取数据
            return {
                statusCode: (res as Response).status,
                errMsg: (res as Response).statusText,
                header: (res as Response).headers,
                data,
            };
        }
        return {
            statusCode: 500,
            errMsg: '网络连接失败！请检查网络！',
            header: {},
            data: {
                error: {
                    message: '网络连接失败！请检查网络！',
                },
            },
            ...res,
        };
    }

    private convertConfig(config: ITaroRequestConfig) {
        const obj: any = {};
        Object.keys(config).forEach((key) => {
            const value = config[key];
            if (key === 'headers') {
                obj.header = value;
            } else {
                obj[key] = value;
            }
        });
        return obj;
    }
}
