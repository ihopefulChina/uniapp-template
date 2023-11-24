<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-20 16:45:36
 * @FilePath: /uniapp_template/src/components/common/gap/index.vue
 * @Description:  gap 间隔槽 该组件一般用于内容块之间的用一个灰色块隔开的场景，方便用户风格统一，减少工作量
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts">
export default { name: 'Gap' };
</script>

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
