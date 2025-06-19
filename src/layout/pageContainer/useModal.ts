import { defineStore } from 'pinia';
import { ref } from 'vue';
import { ShowModalOptions } from './modal/type';

export const useModal = defineStore('modalStore', () => {
    const isShowModal = ref<boolean>(false);
    const modalParmas = ref<ShowModalOptions>();

    const showModal = (params?: ShowModalOptions) => {
        modalParmas.value = params;
        isShowModal.value = !!params;
    };

    return {
        showModal,
        isShowModal,
        modalParmas,
    };
});
