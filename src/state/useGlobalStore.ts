import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { api } from '~/request';
import { LoginResponseVo } from '~/request/data-contracts';
import { routeNames } from '~/routes';

export const useGlobalStore = defineStore('globalStore', () => {
    /** 用户信息接口 */
    const userInfo = ref<LoginResponseVo>();

    /** 获取用户信息 */
    const getUserInfo = async () => {
        const { data, code } = await api['/wechat/auth/userInfo_GET']();
        data && setUserInfo(data);

        return { data, code };
    };

    const setUserInfo = (data?: LoginResponseVo) => {
        userInfo.value = data;
        uni.setStorageSync('userInfo', data);

        return;
    };

    const isLogin = computed(() => !!userInfo?.value?.loginPhone);

    /**  跳转登录页面 */
    const onAuth = () => uni.navigateTo({ url: routeNames?.pagesLoginIndex });

    /** 退出登录 */
    const logOut = () => {
        uni.clearStorageSync();
        userInfo.value = undefined;

        // #ifdef H5 || APP-PLUS
        plus.runtime.restart();
        // #endif

        // #ifdef MP-WEIXIN
        uni.switchTab({ url: routeNames?.pagesTabbarHomeIndex });
        // #endif
    };

    return {
        /** 是否登录 */
        isLogin,
        /** 用户信息 */
        userInfo,
        setUserInfo,
        /** 获取用户信息 */
        getUserInfo,
        /** 跳转登录页面 */
        onAuth,

        /** 退出登录 */
        logOut,
    };
});
