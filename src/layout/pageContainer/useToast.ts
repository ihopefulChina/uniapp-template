/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-16 10:52:23
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-12-05 17:00:16
 * @FilePath: /LX001413-weiyunbao-app/src/layout/pageContainer/useToast.ts
 * @Description: 全局tosat hooks
 */
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { UToastPramsVO } from './toast/type';

export const useToast = defineStore('toastStore', () => {
    const toastParmas = ref<UToastPramsVO>();

    const showToast = (params?: UToastPramsVO) => {
        toastParmas.value = params;
    };

    return {
        toastParmas,
        showToast,
    };
});
