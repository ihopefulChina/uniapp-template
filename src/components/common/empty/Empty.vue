<script setup lang="ts">
import { CSSProperties } from 'vue';
import Gap from '~/components/common/gap/Gap.vue';

import icon_empty from './images/icon_empty.png';

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

const props = withDefaults(defineProps<IEmptyProps>(), {
    emptyStr: '暂无数据',
});
</script>
<template>
    <view>
        <view :style="{ height: `${props?.marginTop}rpx` }"></view>
        <view class="m-auto flex flex-center flex-column">
            <image :style="{ width: `${props?.width || 310}rpx`, height: `${props?.height || 310}rpx` }" :src="props?.iconPath || icon_empty" mode=""></image>
            <Gap :height="10" />
            <text class="common_empty_title" :style="props.emptyStyle">{{ props?.emptyStr }}</text>
            <Gap :height="10" v-if="props?.tips" />
            <text class="common_empty_tips" v-if="props?.tips">{{ props?.tips }}</text>
            <slot name="bottom"></slot>
        </view>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
