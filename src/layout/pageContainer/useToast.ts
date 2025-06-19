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
