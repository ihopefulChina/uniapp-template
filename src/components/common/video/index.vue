<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:27:47
 * @FilePath: /uniapp_template/src/components/common/video/index.vue
 * @Description: 组件 - video
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts">
export default { name: 'MyVideo' };
</script>
<script lang="ts" setup>
import { computed, getCurrentInstance, ref } from 'vue';
import { useLockFn } from '~/hooks';
import { getVideoSnapshotUrl } from '~/utils/aliyun';

export interface IVideoProps {
    /** 指定的宽度 rpx */
    width: number;
    /** 指定的高度 rpx */
    height: number;
    /** 视频地址 videoSrc */
    videoSrc: string;
    /**指定视频初始播放位置，单位为秒（s） */
    initialTime?: number;
    /** 视频封面图 没有的话，取阿里云视频地址第一桢 */
    poster?: string;
    /** 点击播放自动全屏播放 */
    autoFullscree?: boolean;
}

/** 父传子参数 */
const props = defineProps<IVideoProps>();
/** 子传父事件 */
const emits = defineEmits<{
    (e: 'onTimeupdate', data?: any): void;
}>();

const thisInstance = getCurrentInstance()?.proxy || getCurrentInstance();

const isFull = ref<boolean>(false);
const isMask = ref<boolean>(true);

const play = () => {
    isMask.value = false;
    const videoContext = uni.createVideoContext('video_play', thisInstance);
    videoContext.play();
    if (props.autoFullscree) {
        videoContext.requestFullScreen();
    }
};

/** 播放进度 */
const timeupdate = (event: any) => {
    emits('onTimeupdate', event);
};
const fullscreenchange = useLockFn(async (event: any) => {
    if (props.autoFullscree) {
        const videoContext = uni.createVideoContext('video_play', thisInstance);
        const blo = event.detail.fullScreen;
        isFull.value = blo;
        if (!blo) {
            videoContext.pause();
        } else {
            videoContext.play();
        }
    }
});

const styles = computed(() => {
    return { width: `${props?.width}rpx`, height: `${props?.height}rpx` };
});

/** 封面图 */
const posterSrc = computed(() => {
    if (props?.poster) {
        return props?.poster;
    } else if (props?.videoSrc) {
        return props?.videoSrc + getVideoSnapshotUrl({ width: props?.width / 2, height: props?.height / 2 });
    }
    return '';
});
</script>

<template>
    <view class="common_video" :style="styles">
        <cover-view v-if="isMask && !props.autoFullscree" class="common_video_poster" :style="styles" @click="play">
            <cover-image class="common_video_poster_img" :src="posterSrc" />
            <cover-image src="./images/icon_video_play.png" class="icon_video_play" />
        </cover-view>
        <view v-if="props.autoFullscree" class="common_video_poster" :style="styles" @click="play">
            <image class="common_video_poster_img" :src="posterSrc" />
            <image src="./images/icon_video_play.png" class="icon_video_play" />
        </view>

        <video
            :direction="0"
            :class="props.autoFullscree ? 'common_video_src_full' : 'common_video_src'"
            v-show="!props.autoFullscree || isFull"
            :src="props?.videoSrc"
            :poster="posterSrc"
            @fullscreenchange="fullscreenchange"
            :initial-time="props?.initialTime"
            @timeupdate="timeupdate"
            id="video_play"
        />
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
