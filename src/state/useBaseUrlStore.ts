/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:10:48
 * @FilePath: /uniapp_template/src/state/useBaseUrlStore.ts
 * @Description: 切换后端接口hooks
 *
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { isDev, urls } from '~/config';

export const useBaseUrlStore = defineStore('baseUrlStore', () => {
    const deafultUrl = urls?.[0]?.value;
    const baseUrl = ref<string>(uni.getStorageSync('baseUrl') ?? deafultUrl);
    /** 接口地址 */
    const apiUrl = computed(() => (isDev && baseUrl ? baseUrl : deafultUrl));
    /** 修改接口地址 */
    const changeApiUrl = async (url: string) => {
        baseUrl.value = url;
        uni.setStorageSync('baseUrl', url);
    };

    return {
        baseUrl,
        changeApiUrl,
        apiUrl,
        deafultUrl,
    };
});
