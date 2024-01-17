<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-20 13:18:55
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-11 17:24:58
 * @FilePath: /LX001413-weiyunbao-app/src/layout/pageContainer/PageContainer.vue
 * @Description: 组件 - 全局页面父组件
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts" setup>
import { CSSProperties, ref, watchEffect } from 'vue';
import Modal from './modal/Modal.vue';
import Toast from './toast/Toast.vue';
import { useModal } from './useModal';
import { useToast } from './useToast';

interface IPageContainerProps {
    /** 是否是tabbar页面 */
    isTab?: boolean;
    styles?: CSSProperties | string;
    className?: string;
}

/** toast 全局注入
 *
 * 使用方法：
 *  外层包裹 PageContainer 组件
 * const toastStore = useToast();
    toastStore?.showToast({ message: '子组件', duration: 1000 });
 *
 * */
const toastStore = useToast();
const toast = ref<any>();
watchEffect(() => {
    if (toastStore?.toastParmas) {
        toast?.value?.show({
            ...toastStore?.toastParmas,
            complete: () => {
                toastStore?.toastParmas?.complete && toastStore?.toastParmas?.complete();
                toastStore?.showToast(undefined);
            },
        });
    }
});

/** modal 全局注入
 *
 * 使用方法：
 *  外层包裹 PageContainer 组件
 * const modalStore = useModal();
    modalStore?.showModal({ content: '子组件', title: '提示' });
 *
 * */
const modalStore = useModal();
const modal = ref<any>();
watchEffect(() => {
    modal?.value?.showModal(modalStore?.modalParmas);
});

/** 父传子参数 */
const props = defineProps<IPageContainerProps>();
</script>

<template>
    <view class="pageContainer" :style="props?.styles" :class="props?.className">
        <slot></slot>
    </view>
    <!-- 全局提示 -->
    <Toast ref="toast" />
    <!-- 全局Modal -->
    <Modal ref="modal" />
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
