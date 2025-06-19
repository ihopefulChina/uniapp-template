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
