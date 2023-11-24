/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-10-23 10:25:29
 *  * @FilePath: /uniapp_template/src/components/request/core/InterceptorManager.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
interface IHandler<T> {
    fulfilled: T;
    rejected: any;
}

export default class InterceptorManager<T> {
    // 处理函数
    private handlers: IHandler<T>[] = [];

    /**
     * 新增一个拦截器函数
     *
     * @param {T} fulfilled Promise resolve函数
     * @param {*} rejected Promise reject 函数
     * @returns {Number} 拦截器id。可以使用这个id删除拦截器
     * @memberof InterceptorManager
     */
    public use(fulfilled: T, rejected?: any) {
        this.handlers.push({ fulfilled, rejected });
        return this.handlers.length - 1;
    }

    public remove(id: number) {
        if (this.handlers[id]) {
            this.handlers.splice(id, 1);
        }
    }

    public getAllHandler() {
        return this.handlers;
    }
}
