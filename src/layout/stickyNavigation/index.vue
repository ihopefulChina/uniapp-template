<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-13 17:45:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-20 16:50:52
 * @FilePath: /uniapp_template/src/layout/stickyNavigation/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'StickyNavigation' };
</script>

<script lang="ts" setup>
import Navigation from '~/layout/navigation/index.vue';
import { MMNavigationType } from '~/layout/navigation/const';
import { useSystemInfo } from '~/state/useSystemInfo';

const systemInfo = useSystemInfo();

/** 带背景图片的粘性布局导航栏 */
interface IStickyNavigationProps {
    leftIcon?: string;
    /** 标题 */
    title?: string;
    /** 背景图片 */
    backgroundImage?: string;
    /** 背景高度 */
    backgroundHieght?: number;
    /** 隐藏导航栏高度 */
    hidenSpace?: boolean;
}

/** 父传子参数 */
const props = defineProps<IStickyNavigationProps>();
</script>

<template>
    <view>
        <view
            class="navFixed"
            :style="{
                backgroundSize: `100% calc(100vw * ${backgroundHieght || 375} / 375)`,
                backgroundImage: `url(${backgroundImage || './images/page_bg_yellow.png'})`,
            }"
        >
            <Navigation :title="props?.title" :type="MMNavigationType.Transparent" :hidenSpace="hidenSpace" />
        </view>
        <view :style="{ height: `${systemInfo?.navHeight}px` }" v-if="!hidenSpace" />
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
