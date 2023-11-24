export function bind(fn: any, thisArg: any) {
    return function wrap(...args: any[]) {
        return fn.apply(thisArg, args);
    };
}
