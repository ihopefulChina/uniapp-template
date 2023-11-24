import { ICommoRequestConfig, IRequestOption } from '.';

// Taro Types
export interface ITaroRequestConfig extends Omit<uni.request.Option, 'header' | 'success' | 'fail'>, ICommoRequestConfig, IRequestOption {
    params?: {
        [i: string]: any;
    };
    [i: string]: any;
}

export interface ITaroResponse<T = any> extends uni.request.SuccessCallbackResult<T> {
    config: ITaroRequestConfig;
    href: string;
}

export type ITaroRequestInterceptor<T = ITaroRequestConfig> = (config: T) => T | Promise<T>;
export type ITaroResponseInterceptor<T extends ITaroResponse = ITaroResponse> = (response: T) => T | Promise<T>;
