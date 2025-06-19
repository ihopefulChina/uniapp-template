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
