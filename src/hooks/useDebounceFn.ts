/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-18 09:02:21
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-09-18 09:02:55
 *  * @FilePath: /uniapp_template/src/hooks/useDebounceFn.ts
 * @Description: 处理防抖函数的 Hook
 */
import debounce from 'lodash/debounce';

export interface DebounceOptions {
    /**
     * The number of milliseconds to delay.
     */
    wait?: number;

    /**
     * Specify invoking on the leading edge of the timeout.
     */
    leading?: boolean;

    /**
     * Specify invoking on the trailing edge of the timeout.
     */
    trailing?: boolean;

    /**
     * The maximum time func is allowed to be delayed before it’s invoked.
     */
    maxWait?: number;
}

type noop = (...args: any) => any;

function useDebounceFn<T extends noop>(fn: T, options?: DebounceOptions) {
    const wait = options?.wait ?? 1000;
    const debounced = debounce(fn, wait, options);
    return {
        /**
         * Invode and pass parameters to fn.
         * `(...args: any[]) => any`
         */
        run: debounced,

        /**
         * Cancel the invocation of currently debounced function.
         *  `() => void`
         */
        cancel: debounced.cancel,

        /**
         * Immediately invoke currently debounced function.
         *  `() => void`
         */
        flush: debounced.flush,
    };
}

export default useDebounceFn;
