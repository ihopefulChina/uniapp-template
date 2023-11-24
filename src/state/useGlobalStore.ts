/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:09:35
 * @FilePath: /uniapp_template/src/state/useGlobalStore.ts
 * @Description: globalStore
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia';
import { computed, nextTick, ref } from 'vue';
import { ClientType } from '~/enums/common';

import { api } from '~/request';
import { MemberOutputDto } from '~/request/data-contracts';
import { routeNames } from '~/routes';

export const useGlobalStore = defineStore('globalStore', () => {
    // const systemInfo = useSystemInfo();
    /** 当前用户登录的端：1.用户端，2.员工端 */
    const loginClient = ref<ClientType | undefined>();
    /** 用户信息接口 */
    const userInfo = ref<MemberOutputDto>();

    /** 获取用户信息 */
    const getUserInfo = async () => {
        const token = uni.getStorageSync('token');

        if (!token) {
            return;
        }

        const { data, code } = await api['/wechat/web/member/getUserInfo_GET']();
        data && setUserInfo(data);

        return { data, code };
    };

    const setUserInfo = (data?: MemberOutputDto) => {
        userInfo.value = data;
        uni.setStorageSync('userInfo', data);
        // 如果是第一次进入，判断是否有员工身份

        changeClient(data?.loginClient);
        return;
    };

    const isLogin = computed(() => !!userInfo?.value?.mobile);

    /**  跳转登录页面 */
    const onAuth = () => uni.navigateTo({ url: routeNames?.pagesLoginIndex });

    /** 登录鉴权 */
    const onAuthClick = (fn: any) => (userInfo?.value?.mobile ? fn : onAuth);

    const changeClient = async (clientNumber?: ClientType) => {
        loginClient.value = clientNumber ?? ClientType.Client;
        uni.setStorageSync('loginClient', clientNumber ?? ClientType.Client);
    };

    /** 切换客户端 */
    const switchClient = async (clientNumber: ClientType) => {
        const { data } = await api['/wechat/web/member/changeClient_GET']({ source: `${clientNumber ?? ClientType.Client}` });
        uni.setStorageSync('token', data);

        nextTick(() => {
            getUserInfo();
        });
        setTimeout(() => {
            uni.switchTab({ url: routeNames?.pagesTabbarHomeIndex });
        }, 0);
    };
    /** 退出登录 */
    const logOut = () => {
        uni.clearStorageSync();
        userInfo.value = undefined;
        uni.switchTab({ url: routeNames?.pagesTabbarHomeIndex });
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
        /** 登录鉴权 */
        onAuthClick,
        /** 当前用户登录的端：1.用户端，2.员工端 */
        loginClient,
        /** 切换客户端 */
        switchClient,
        /** 退出登录 */
        logOut,
    };
});
