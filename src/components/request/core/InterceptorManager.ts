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
