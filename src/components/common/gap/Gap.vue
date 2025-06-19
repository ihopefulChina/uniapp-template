<script lang="ts" setup>
import { computed } from 'vue';

export interface IPictureProps {
    width?: number;
    /** 指定的高度 rpx */
    height?: number;
    /** styles */
    styles?: object;
}

/** 父传子参数 */
const props = defineProps<IPictureProps>();

const gapStyle = computed(() => {
    return {
        width: `${props?.width ?? 0}rpx`,
        height: `${props?.height ?? 0}rpx`,
        ...props?.styles,
    };
});
</script>

<template>
    <view :style="gapStyle"> </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
