import { RouteParams } from '~/RouteParams';
import { routeNames, tabbar } from '~/routes';

/* 是否是tabbar页面
 * @param path 路径地址
 * @returns
 */
export function isTabPage(path: string) {
    return tabbar.some(({ url }) => url === path);
}

type TJumpMethod = 'navigateTo' | 'redirectTo' | 'navigateBack';

async function jumpFn<T extends keyof typeof routeNames>(name: T, method: TJumpMethod, params?: any) {
    let url = /\//.test(name) ? name : routeNames[name];

    if (!url) {
        return uni.showToast({ title: `路由${name}不存在`, icon: 'none' });
    }

    const isTab = isTabPage(url);

    if (params) {
        url += '?' + new URLSearchParams(params).toString();
    }
    // @ts-ignore
    isTab ? uni.switchTab({ url }) : uni[method]({ url });
}

const jump = throttle(jumpFn as any, 1000);

/**
 * 重定向至
 * @param name routeNames 的key值 或者url地址
 * @param params
 * @returns
 */
export function redirectTo<T extends keyof typeof routeNames>(name: T, params?: RouteParams[T]) {
    jumpFn(name, 'redirectTo', params);
}

/**
 * 导航至
 * @param name routeNames 的key值 或者url地址
 * @param params
 * @returns
 */
export function navTo<T extends keyof typeof routeNames>(name: T, params?: RouteParams[T]) {
    const pages = getCurrentPages();
    if (pages.length >= 10) {
        jumpFn(name, 'redirectTo', params);
    } else {
        jumpFn(name, 'navigateTo', params);
    }
}

/**
 * 返回上一页
 */
export function goBack(params?: Pick<UniNamespace.NavigateBackOptions, 'delta'>) {
    uni.navigateBack(params);
}

/**
 * 导航钩子
 *
 * 可通过navTo方法进行跳转
 * @support H5 WEAPP APP
 * @returns
 */
export function useNavigation() {
    /**
     * 导航至
     * @param name routeNames 的key值 或者url地址
     * @param params
     * @returns
     */
    function navTo<T extends keyof typeof routeNames>(name: T, params?: RouteParams[T]) {
        jump(name, 'navigateTo', params);
    }

    /**
     * 重定向至
     * @param name routeNames 的key值 或者url地址
     * @param params
     * @returns
     */
    function redirectTo<T extends keyof typeof routeNames>(name: T, params?: RouteParams[T]) {
        jump(name, 'redirectTo', params);
    }
    /**
     * 打开第三方小程序
     */
    function navigateToMiniProgram(
        params: {
            /** 小程序名称，客户端需要 */
            name?: string;
            /** 小程序原始id，客户端打开的小程序需要 */
            originId: string;
        } & UniNamespace.NavigateToMiniProgramOptions
    ) {
        const { name = 'SEPHORA丝芙兰', originId, ...weappParams } = params;

        const env = 'release';
        uni.navigateToMiniProgram({
            envVersion: env,
            ...weappParams,
        });
    }

    return {
        navTo,
        redirectTo,
        goBack,
        navigateToMiniProgram,
    };
}

type Fun = () => any;

/**
 * 节流函数
 * @param fn 包裹函数
 * @param threshold 间隔时间 默认200ms
 * @param scope this作用域
 * @returns
 */
export function throttle(fn: Fun, threshold = 200, scope?: any) {
    let prev = Date.now();
    // @ts-ignore
    return function (...args) {
        const now = Date.now();
        if (now - prev > threshold) {
            prev = now;
            // @ts-ignore
            fn.apply(scope || this, args);
        }
    };
}
