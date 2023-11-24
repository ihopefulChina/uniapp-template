<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-22 18:37:56
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:33:34
 * @FilePath: /uniapp_template/src/components/custom/customTabs/index.vue
 * @Description: 组件 - 自定义tab
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'CustomTabs' };
</script>

<script setup lang="ts">
interface IItemProps {
    /** 数据 */
    list: Array<{ value: string; label: string }>;
    /** 当前值 */
    current: string | number;
    /** 自定义导航栏高度 */
    CustomBar?: number;
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
    <view class="flex flex-ai common_tabs" :style="{ top: `${props?.CustomBar || 0}px` }">
        <view class="fix_list" v-for="item in props?.list" :class="props?.current == item.value ? 'on' : ''" @click="change(item)" :key="item?.value">
            <text>{{ item.label }}</text>
        </view>
    </view>
</template>

<style lang="scss" scoped>
.common_tabs {
    padding-top: 16rpx;
}
.fix_list {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 72rpx;
}

.fix_list text {
    font-size: 32rpx;
    color: #abaaa8;
    font-weight: 400;
    position: relative;
    z-index: 1;
    transition: all 0.3s;
}

.fix_list.on text {
    color: #2a2827;
    font-weight: bold;
}

.fix_list text::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2rpx;
    width: 100%;
    height: 14rpx;
    z-index: -1;
    background: transparent;
    transition: all 0.3s;
}

.fix_list.on text::after {
    background: linear-gradient(90deg, #fa9240 0%, rgba(250, 146, 64, 0) 100%);
}
</style>
