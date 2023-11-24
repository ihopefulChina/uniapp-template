<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-10-13 14:13:30
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:26:25
 * @FilePath: /uniapp_template/src/components/common/modal/index.vue
 * @Description: 组件 - 自定义弹窗Modal
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'Modal' };
</script>

<script lang="ts" setup>
import { nextTick, ref, watch } from 'vue';
import { useLocale } from '~/hooks';
import { TnModalInstance } from '~/uni_modules/tuniaoui-vue3';
import TnModal from '~/uni_modules/tuniaoui-vue3/components/modal/src/modal.vue';

interface IZxModalProps {
    modelValue: boolean;
    title?: string;
    content?: string;
    cancelText?: string;
    confirmText?: string;
    showCancel?: boolean;
    confirmStyle?: object;
    cancelStyle?: object;
    maskClosable?: boolean;
    cancel?: () => void;
    confirm?: () => void;
}
const props = defineProps<IZxModalProps>();

const emits = defineEmits<{
    (e: 'update:modelValue', data: boolean): void;
}>();
const { t } = useLocale();
const modalRef = ref<TnModalInstance>();
const initState = ref<boolean>(props?.modelValue);

const handleCancel = () => {
    emits('update:modelValue', !initState.value);
};

const openModal = () => {
    nextTick(() => {
        modalRef.value?.showModal({
            title: props.title && !props.content ? undefined : props.title,
            content: props.content || '',
            cancelText: props.cancelText || t('common.cancel'),
            confirmText: props.confirmText || t('common.confirm'),
            showCancel: props.showCancel,
            confirmStyle: props.confirmStyle || { color: '#FA9240' },
            cancelStyle: props.cancelStyle || { color: '#2A2827' },
            maskClosable: props.maskClosable,
            cancel: () => {
                handleCancel();
                props.cancel && props.cancel();
            },
            confirm: () => {
                handleCancel();
                props.confirm && props.confirm();
            },
        });
    });
};

watch(
    () => props.modelValue,
    () => {
        initState.value = props.modelValue;
        props.modelValue && openModal();
    }
);
</script>

<template>
    <view :style="{ display: initState ? 'block' : 'none' }">
        <TnModal ref="modalRef">
            <view class="contentCustom" v-if="props.title && !props.content">{{ props.title }}</view>
            <view class="contentCustom1" v-else>{{ props.content }}</view>
        </TnModal>
    </view>
</template>

<style lang="scss" scoped>
.contentCustom {
    padding-top: 28rpx;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2a2827;
    text-align: center;
}
.contentCustom1 {
    font-size: 32rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7f7e7d;
    text-align: center;
}
</style>
