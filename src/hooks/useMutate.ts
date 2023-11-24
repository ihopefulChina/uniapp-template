/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-01-23 09:41:13
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:03:00
 * @FilePath: /uniapp_template/src/hooks/useMutate.ts
 * @Description: 对于简单的获取数据方法的一个封装
 *
 * Copyright (c) 2023 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */

import { useLockFn } from './useLockFn';
import { onMounted, ref } from 'vue';

interface IMutateOption<T> {
    /** 默认数据 */
    defaultData?: T;

    /** 额外传递参数 */
    params?: Record<string, any>;

    /** 初始是否发出请求 */
    initRequest?: boolean;

    /** 获取数据 */
    getData: (data: Record<string, any>) => Promise<{ data?: T }>;

    /** 数据格式化 */
    dataFormat?(data?: T): any;

    /** 请求成功后的回调 */
    successCallback?(data?: T): void;
}

export function useMutate<T>(config: IMutateOption<T>) {
    const { defaultData, params, initRequest = true } = config;
    const detail = ref<T | undefined>(defaultData);
    const noData = ref<boolean>();
    const isInit = ref(initRequest);

    const mutate = useLockFn(async () => {
        try {
            const { data } = await config.getData({ ...params });
            const newData = config.dataFormat ? config.dataFormat(data) : data;

            detail.value = newData;
            config?.successCallback?.(newData);

            /**暂无数据 */
            let blo = false;
            if (newData !== undefined) {
                if (newData instanceof Array) {
                    blo = newData.length === 0;
                } else if (newData instanceof Object) {
                    blo = Object.keys(newData).length === 0;
                }
            } else {
                blo = true;
            }
            noData.value = blo;
            return false;
        } catch (error) {
            console.log(error);
        }
    }, 500);

    onMounted(() => {
        if (!isInit.value) {
            isInit.value = true;
        } else {
            mutate();
        }
    });

    return { mutate, detail, noData };
}
