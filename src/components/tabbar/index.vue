<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-21 10:43:09
 * @FilePath: /uniapp_template/src/components/tabbar/index.vue
 * @Description: 组件 - 自定义 tabbar
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts">
export default { name: 'Tabbar' };
</script>

<script lang="ts" setup>
import { useLocale } from '~/hooks';
import { ITabBarData } from './type';
import { useTabbarStore } from './useTabbarStore';
import { useSystemInfo } from '~/state/useSystemInfo';

const tabbarStore = useTabbarStore();
const systemInfo = useSystemInfo();
const { t } = useLocale();

/** 点击事件 */
const handleClick = ({ url }: ITabBarData, index: number) => {
    tabbarStore?.setCurrent(index);
    uni.switchTab({ url });
};
</script>

<template>
    <view class="tabbar">
        <view class="content">
            <view class="item" v-for="(value, index) in tabbarStore?.data" :key="value?.url + index" :class="{ selected: tabbarStore?.current === index }" @click="handleClick(value, index)">
                <image class="image" :src="tabbarStore?.current === index ? `${value.imageSelected}` : `${value.image}`" />
                <view class="text">{{ value?.key ? t(value?.key) : value?.text }} </view>
            </view>
        </view>

        <view v-if="systemInfo?.isNewIphone" :style="{ height: '68rpx' }" />
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
