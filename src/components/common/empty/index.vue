<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:29:15
 * @FilePath: /uniapp_template/src/components/common/empty/index.vue
 * @Description: 组件 - 空数据
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'Empty' };
</script>

<script setup lang="ts">
import Gap from '~/components/common/gap/index.vue';
import { CSSProperties } from 'vue';

interface IEmptyProps {
    /** 间距 */
    marginTop?: number | string;
    /** 宽度 */
    width?: number | string;
    /** 高度 */
    height?: number | string;
    /** 图片地址 */
    iconPath?: string;
    /** tips */
    tips?: string;
    /** 描述 */
    emptyStr?: string;
    /** 描述的style */
    emptyStyle?: CSSProperties;
}

const props = defineProps<IEmptyProps>();
</script>
<template>
    <view>
        <view :style="{ height: `${props?.marginTop}rpx` }"></view>
        <view class="m-auto flex flex-center flex-column">
            <image :style="{ width: `${props?.width || 360}rpx`, height: `${props?.height || 320}rpx` }" :src="props?.iconPath || './images/icon_empty.png'" mode=""></image>
            <Gap :height="10" v-if="props?.emptyStr" />
            <text class="common_empty_title" v-if="props?.emptyStr" :style="props.emptyStyle">{{ props?.emptyStr }}</text>
            <Gap :height="10" v-if="props?.tips" />
            <text class="common_empty_tips" v-if="props?.tips">{{ props?.tips }}</text>
            <slot name="bottom"></slot>
        </view>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
