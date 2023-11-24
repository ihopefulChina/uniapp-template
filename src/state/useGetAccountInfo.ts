/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-09 09:16:14
 *  * @FilePath: /uniapp_template/src/state/useGetAccountInfo.ts
 * @Description: 获取当前帐号信息，可以返回小程序的Appid。如果使用了微信小程序的云端插件，还可以返回当前插件Appid、版本号。
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

import { onLoad } from '@dcloudio/uni-app';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useGetAccountInfo = defineStore('accountInfo', () => {
    // 判断当前小程序的运行环境  develop → 开发环境 || trial → 体验版 || release → 正式版
    const envVersion = ref<'develop' | 'trial' | 'release'>();
    const notRelease = ref<boolean>();
    const isDevelop = ref<boolean>();

    onLoad(() => {
        // 小程序
        // #ifdef MP-WEIXIN
        const accountInfo = uni.getAccountInfoSync();
        envVersion.value = accountInfo?.miniProgram?.envVersion;
        notRelease.value = ['develop', 'trial'].includes(accountInfo?.miniProgram?.envVersion);
        isDevelop.value = accountInfo?.miniProgram?.envVersion === 'develop';
        // #endif
    });

    return {
        envVersion,
        notRelease,
        isDevelop,
    };
});
