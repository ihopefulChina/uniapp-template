import { routeNames, tabbar } from '../routes';

const tabbarUrlList = tabbar.map((item) => item?.url);
interface INavigateOpts {
    success?: (res: any) => void;
    complete?: (res: any) => void;
    fail?: (res: any) => void;
}

export function useMyRoute() {
    const { length } = getCurrentPages();
    // 公司修改的框架引入了 routeNames，为了方便使用，将路由封装一下，使用的时候可以直接提示
    const routerFn = <K extends Record<string, string>, T extends keyof K>(routes: K, isReplace = false) => {
        const lastCache: Record<string, number> = {};

        return (routeKey: T, prop: Record<string, number | string> = {}, opts?: INavigateOpts) => {
            const path = routes[routeKey] as string;
            const now = Date.now();
            if (now - (lastCache?.[path] || 0) < 500) {
                return;
            }
            lastCache[path] = now;
            const paramList: string[] = [];
            for (const [key, val] of Object.entries(prop)) {
                paramList.push(`${key}=${val}`);
            }
            let url = path;
            if (paramList.length) {
                url += `?${paramList.join('&')}`;
            }
            if (!path) {
                // eslint-disable-next-line no-console
                console.log('navigate err, 路由传的 key 不对');
                uni.navigateTo({ url: routeNames?.pagesCommonNotFoundIndex });
            } else if (tabbarUrlList.includes(path)) {
                uni.switchTab({ url, ...opts });
            } else if (isReplace) {
                uni.redirectTo({ url, ...opts });
            } else {
                if (length >= 10) {
                    uni.redirectTo({ url, ...opts });
                    return;
                }

                uni.navigateTo({ url, ...opts });
            }
        };
    };
    const navigate = routerFn(routeNames, false);

    const replace = routerFn(routeNames, true);

    return { navigate, replace, routeNames };
}
