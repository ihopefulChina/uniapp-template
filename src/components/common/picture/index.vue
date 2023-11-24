<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 12:59:34
 * @FilePath: /uniapp_template/src/components/common/picture/index.vue
 * @Description: 组件 - 图片展示 （解决图片尺寸太大，导致页面渲染卡顿问题）
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'MyPicture' };
</script>

<script lang="ts" setup>
import { ref, watch } from 'vue';
import { assembleResizeUrl } from '~/utils/aliyun';

export interface IPictureProps {
    /** 图片地址 */
    src?: string;
    /** 指定的宽度 */
    width: number;
    /** 指定的高度 */
    height: number;
    /** styles */
    styles?: object;
    /** 是否preview */
    preview?: boolean;
    /** 预览图片数组 */
    previewList?: string[];
}
/** 子传父事件 */
const emits = defineEmits<{
    (e: 'onLoad', event: any): void;
    (e: 'click', event: any): void;
}>();
/** 父传子参数 */
const props = defineProps<IPictureProps>();

const loading = ref<boolean>(true);

const onLoad = (event: any) => {
    emits('onLoad', event);
    loading.value = false;
};

const onPreview = (event: any) => {
    event.stopPropagation();

    emits('click', event);
    let current = props.src || '';
    let urls = [current];
    if (props?.previewList && props?.previewList.length > 0) {
        urls = props?.previewList;
        // props.src可能不是原图，所以尝试从previewList中提取
        const find = urls.find((item) => current.indexOf(item) >= 0);
        if (find) {
            current = find;
        }
    }
    uni.previewImage({ current, urls, showmenu: false });
};
/** 点击事件 */
const headleClick = (event: any) => {
    props?.preview ? onPreview(event) : emits('click', event);
};
watch(
    () => props?.src,
    () => {
        if (!loading?.value) {
            loading.value = true;
        }
    }
);
</script>

<template>
    <view @click="headleClick" :class="[loading ? 'loading' : '', 'MMPicture']" :style="{ width: `${props?.width}rpx`, height: `${props?.height}rpx`, ...props?.styles }">
        <image class="inPicture" v-if="props?.src" :src="assembleResizeUrl(props?.src, props?.width, props?.height)" @load="onLoad" />
        <slot></slot>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
