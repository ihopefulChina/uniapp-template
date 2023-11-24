/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-01-18 17:18:45
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-09-25 13:18:21
 *  * @FilePath: /uniapp_template/src/hooks/useLockFn.ts
 * @Description: 用于给一个异步函数增加竞态锁，防止并发执行。
 *
 * Copyright (c) 2023 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */
import { ref } from 'vue';

type ArgsAny = any[];

type Fn = (...args: ArgsAny) => Promise<any>;

export const useLockFn = (fn: Fn, delay = 600) => {
    const lock = ref(false);
    const lastDate = ref();

    return async (...args: ArgsAny) => {
        if (lock.value) return;
        const nowDate = new Date();

        if (lastDate?.value && nowDate.getTime() - lastDate?.value.getTime() <= delay) {
            return;
        }
        lastDate.value = nowDate;

        lock.value = true;
        try {
            const ret = await fn(...args);
            lock.value = false;
            return ret;
        } catch (error) {
            lock.value = false;
            throw error;
        }
    };
};
