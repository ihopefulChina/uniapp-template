<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-27 10:10:14
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-10 09:41:41
 * @FilePath: /LX001413-weiyunbao-app/src/layout/navigation/Navigation.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script setup lang="ts">
import { computed } from 'vue';
import { routeNames } from '~/routes';
import { useSystemInfo } from '~/state/useSystemInfo';
import { MMNavigationType, navigationTypeStyleMap } from './const';

import icon_navbar_back_black from './images/icon_navbar_back_black.png';
import icon_navbar_back_white from './images/icon_navbar_back_white.png';

interface IStickyNavigationProps {
    /** 是否isTab */
    isTab?: boolean;
    /** 标题 */
    title?: string;
    /** 导航类型 */
    type?: MMNavigationType;
    /** 隐藏导航栏高度 */
    hidenSpace?: boolean;
    /** 自定义样式 */
    customStyle?: Record<string, any>;
}
const systemInfo = useSystemInfo();
/** 父传子参数 */
const props = defineProps<IStickyNavigationProps>();

const navTypeStyle = computed(() => navigationTypeStyleMap?.[props.type || MMNavigationType.Default]);

const onNav = async () => {
    let result = true;
    const { length } = getCurrentPages();

    if (!result) return;
    if (length > 1) {
        uni.navigateBack({ delta: 1 });
    } else {
        uni.switchTab({ url: routeNames.pagesTabbarHomeIndex });
    }
};
</script>

<template>
    <view class="navFixed" :style="{ background: navTypeStyle?.backgroundColor, ...props?.customStyle }">
        <view class="statusBar" :style="{ height: `${systemInfo?.statusBarHeight}px` }"></view>
        <view class="navMenu" :style="{ height: `${systemInfo?.navMenuHeight}px` }">
            <view class="left" @click="onNav" v-if="!props?.isTab">
                <image
                    :src="props.type && [MMNavigationType.Transparent_white, MMNavigationType.Blue].includes(props.type) ? icon_navbar_back_white : icon_navbar_back_black"
                    class="icon_navbar_back_black"
                />
            </view>
            <slot name="customTitle"></slot>
            <view class="title" :style="{ color: navTypeStyle?.color }"> {{ props?.title ?? '' }} </view>

            <view class="right"> <slot name="right"></slot> </view>
        </view>
    </view>
    <view :style="{ height: `${systemInfo?.navHeight}px` }" v-if="!hidenSpace" />
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
