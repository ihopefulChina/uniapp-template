<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-20 13:18:55
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:04:44
 * @FilePath: /uniapp_template/src/layout/pageContainer/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'PageContainer' };
</script>

<script lang="ts" setup>
import Toast from './toast/index.vue';
import Modal from './modal/index.vue';
import { useToast } from './useToast';
import { useModal } from './useModal';

import { CSSProperties, ref, watchEffect } from 'vue';

interface IPageContainerProps {
    styles?: CSSProperties | string;
    className?: string;
}

/** toast 全局注入
 *
 * 使用方法：
 *  外层包裹 PageContainer 组件
 * const toastStore = useToast();
    toastStore?.toast({ message: '子组件', duration: 1000 });
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
                toastStore?.toast(undefined);
            },
        });
    }
});

/** modal 全局注入
 *
 * 使用方法：
 *  外层包裹 PageContainer 组件
 * const modalStore = useModal();
    modalStore?.modal({ content: '子组件', title: '提示' });
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
