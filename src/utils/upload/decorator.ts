import coreAutobind from 'core-decorators/lib/autobind';

/**
 * 绑定this
 *
 * @export
 * @returns
 */
export const autobind = coreAutobind;

/**
 * 函数在未运行完成前 锁死
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
export function lock(): MethodDecorator {
    let runing = false;
    return (_target, _name, descriptor: any) => {
        const fun = descriptor.value;
        descriptor.value = async function (...args) {
            if (!runing) {
                runing = true;
                try {
                    await fun.apply(this, args);
                } catch (error) {
                    // eslint-disable-next-line require-atomic-updates
                    runing = false;
                    throw error;
                }
                // eslint-disable-next-line require-atomic-updates
                runing = false;
            }
        };
        return descriptor;
    };
}

/**
 * 多少毫秒才能发送一次 限流
 *
 * @export
 * @param {number} [time=100]
 * @returns {MethodDecorator}
 */
export function throttle(time = 200): MethodDecorator {
    let date = new Date();
    return (_target, _name, descriptor: any) => {
        const fun = descriptor.value;
        descriptor.value = function (...args) {
            const now = new Date();
            if (now.getTime() - date.getTime() > time) {
                date = now;
                fun.apply(this, args);
            }
        };
        return descriptor;
    };
}

/**
 * 延迟触发  多次提交，提交最后一次
 *
 * @export
 * @param {number} [time=10]
 * @returns {MethodDecorator}
 */
export function debounce(time = 200): MethodDecorator {
    let st;
    return (_target, _name, descriptor: any) => {
        const fun = descriptor.value;
        descriptor.value = function (...args) {
            clearTimeout(st);
            st = setTimeout(() => {
                fun.apply(this, args);
            }, time);
        };
        return descriptor;
    };
}

/**
 * 特殊限流，最后一次的函数肯定触发
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
export function throttleLast(time = 200): MethodDecorator {
    let date = new Date();
    let stLast;
    return (_target, _name, descriptor: any) => {
        const fun = descriptor.value;
        descriptor.value = function (...args) {
            const now = new Date();
            clearTimeout(stLast);
            if (now.getTime() - date.getTime() > time) {
                date = now;
                fun.apply(this, args);
            } else {
                stLast = setTimeout(() => {
                    fun.apply(this, args);
                }, time);
            }
        };
        return descriptor;
    };
}

/**
 * 所有函数返回值均是最后一个函数的返回值 返回值转为promise
 *
 * @export
 * @param {number} [time=200]
 * @returns {MethodDecorator}
 */
export function merge(time = 200): MethodDecorator {
    let st;
    let resloveFunction: any;
    let returnPromise: Promise<any> | undefined;
    return (_target, _name, descriptor: any) => {
        const fun = descriptor.value;
        descriptor.value = function (...args) {
            if (!returnPromise) {
                returnPromise = new Promise((resolve) => {
                    resloveFunction = resolve;
                });
            }

            clearTimeout(st);
            st = setTimeout(() => {
                resloveFunction(fun.apply(this, args));
                returnPromise = undefined;
            }, time);

            return returnPromise;
        };
        return descriptor;
    };
}
