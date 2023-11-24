export interface IRequestOption {
    /**
     * 基础路径
     *
     * https://xx.xx.com/
     */
    baseUrl?: string;
    /**
     * 默认请求头。为一个原生对象
     * { 'Content-Type': 'application/json' }
     */
    headers?: { [key: string]: string };
    [i: string]: any;
}

export interface IRequestParams {
    [i: string]: any;
}

export interface ICommoRequestConfig {
    /**
     * 查询参数，会拼接到url后面
     */
    params?: IRequestParams;
    /**
     * url 动态参数键值对。当url中有动态参数时。可以通过使用这个参数进行匹配替换
     * 例如 /:foo/:bar
     * urlMatch: {
     *  foo: 2,
     *  bar: 'test'
     * }
     *
     * => /2/test
     */
    urlMatch?: {
        [i: string]: any;
    };
    /**
     * 跳过拦截器函数。默认为false。
     * true 跳过请求和响应拦截器
     * request 跳过请求拦截器
     * response 跳过响应拦截器
     */
    skipInterceptor?: ISkipInterceptor;
}

export type ISkipInterceptor = boolean | 'request' | 'response';
