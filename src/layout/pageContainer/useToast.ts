/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-16 10:52:23
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:05:04
 * @FilePath: /uniapp_template/src/layout/pageContainer/useToast.ts
 * @Description: 全局tosat hooks
 */
import { defineStore } from 'pinia';
import { UToastPramsVO } from './toast/type';
import { ref } from 'vue';

export const useToast = defineStore('toastStore', () => {
    const toastParmas = ref<UToastPramsVO>();

    const toast = (params?: UToastPramsVO) => {
        toastParmas.value = params;
    };

    return {
        toastParmas,
        toast,
    };
});
