<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-22 18:37:56
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-20 16:46:32
 * @FilePath: /uniapp_template/src/components/common/segmented/index.vue
 * @Description:  组件 - 分段控制器
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'Segmented' };
</script>

<script setup lang="ts">
interface IItemProps {
    /** 数据 */
    list: Array<{ value: string; label: string }>;
    /** 当前值 */
    current?: string | number;
}

const props = defineProps<IItemProps>();
const emits = defineEmits<{
    (e: 'change', data?: string | number): void;
}>();

const change = (item: any) => {
    if (props?.current === item.value) return;
    emits('change', item.value);
};
</script>

<template>
    <view class="common_segmented">
        <view class="common_segmented_center">
            <view class="fix_list_item" v-for="item in props?.list" :class="props?.current == item.value ? 'on' : ''" @click="change(item)" :key="item?.value">
                {{ item?.label ?? '' }}
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.common_segmented {
    display: flex;
    justify-content: center;
    align-items: center;
}
.common_segmented_center {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80rpx;
    background: #f8f5f1;
    border-radius: 44rpx;
}
.fix_list_item {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 193rpx;
    border: 6rpx solid transparent;
    font-size: 26rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #abaaa8;
    line-height: 36rpx;
    &.on {
        border-radius: 38rpx;
        background: #fff;
        font-size: 26rpx;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #2a2827;
        line-height: 36rpx;
        border: 6rpx solid #f8f5f1;
    }
}
</style>
