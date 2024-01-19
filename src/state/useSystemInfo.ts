/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-19 15:45:27
 * @FilePath: /uniapp_template/src/state/useSystemInfo.ts
 * @Description: 获取设备信息
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

const newPhoneList = [/iPhone X/, /iPhone 1/, /iPhone 2/, /iPhone 3/, /unknown.*iPhone/];

export const useSystemInfo = defineStore('systemInfo', () => {
    /** isNewIphone */
    const isNewIphone = ref<boolean>(false);
    /** 是否微信环境 */
    const isWechat = ref<boolean>(false);
    /** 菜单高度 */
    const navMenuHeight = ref<number>(44);
    /** 状态栏高度 */
    const statusBarHeight = ref<number>(0);
    /** 屏幕宽度 */
    const screenWidth = ref<number>(0);
    /** 屏幕高度 */
    const screenHeight = ref<number>(0);
    // 底部 tabbar 菜单部分高度
    const tabbarMenuHeight = 50;

    const getSystemRectInfo = () => {
        try {
            const systemInfo = uni.getSystemInfoSync();

            // 小程序右上角的胶囊布局数据
            // #ifdef MP-WEIXIN || MP-ALIPAY || MP-BAIDU || MP_TOUTIAO || MP-QQ
            const capsule = uni.getMenuButtonBoundingClientRect();
            // 胶囊顶部减去状态栏高度可以得到导航栏菜单的 paddintTop，上下内边距 + 胶囊高度 = 导航栏菜单高度
            navMenuHeight.value = (capsule.top - (systemInfo?.statusBarHeight || 0)) * 2 + capsule.height;
            // #endif

            // 屏幕高度
            screenHeight.value = systemInfo.screenHeight;
            // 屏幕宽度
            screenWidth.value = systemInfo.screenWidth;
            // 状态栏的高度
            statusBarHeight.value = systemInfo?.statusBarHeight || 0;
            isNewIphone.value = newPhoneList.some((item) => item.test(systemInfo.model));

            const host = systemInfo?.host as any;
            const env = host?.env;
            isWechat.value = env === 'WeChat'; // 是否微信环境
        } catch {
            // eslint-disable-next-line no-console
        }
    };
    getSystemRectInfo();

    // 底部 tabbar 高度
    const tabbarHeight = computed(() => (isNewIphone?.value ? tabbarMenuHeight + 34 : tabbarMenuHeight));
    /** 中间区域高度 */
    const bodyHeight = computed(() => screenHeight?.value - navHeight?.value - tabbarHeight?.value);
    // 除去导航高度后的剩余高度
    const bodyNoTabHeight = computed(() => screenHeight?.value - navHeight?.value);
    //  整个导航栏高度
    const navHeight = computed(() => navMenuHeight?.value + statusBarHeight?.value);
    // iOS设备底部预留高度
    const iosFooterHeight = computed(() => (isNewIphone?.value ? 34 : 0));
    return {
        /** 整个导航栏高度 */
        navHeight,
        /** 菜单高度 */
        navMenuHeight,
        /** 状态栏的高度 */
        statusBarHeight,
        /** 屏幕高度 */
        screenHeight,
        /** 屏幕宽度 */
        screenWidth,
        /** 底部 tabbar 高度 */
        tabbarHeight,
        /** 中间区域高度 */
        bodyHeight,
        /** 除去导航高度后的剩余高度 */
        bodyNoTabHeight,
        /** 底部 tabbar 菜单部分高度 */
        tabbarMenuHeight,
        /**isNewIphone */
        isNewIphone,
        /**是否微信环境 */
        isWechat,
        /** iOS设备底部预留高度 */
        iosFooterHeight,
    };
});
