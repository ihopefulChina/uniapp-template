<script lang="ts" setup>
import { CSSProperties, computed, getCurrentInstance, ref, watchEffect } from 'vue';
import { drawImage, drawRect, drawText, getImageInfo, getStyle } from './tool';

export interface IPosterProps {
    dataList?: any[];
    width?: number;
    height?: number;
}
const dpr = 2;

/** 父传子参数 */
const { dataList = [], width = 350, height = 350 } = defineProps<IPosterProps>();
const emits = defineEmits<{
    (e: 'setImgSrc', data?: string): void;
}>();
const instance = getCurrentInstance();
const isDrawing = ref(false); // 绘制中状态
const isReDraw = ref(false); // 是否需要重绘，当 canvas 在绘制中的时候 dataList 更新了，那么本次绘制会跳过，等绘制结束了开始重绘
const drawCount = ref(0); // 绘制计数，当绘制失败时重新绘制
const src = ref('');

// 图片尺寸
const style = computed(() => {
    const sty: CSSProperties = {};
    if (width) sty.width = `${width}rpx`;
    if (height) sty.height = `${height}rpx`;

    return sty;
});
// canvas 尺寸，为了清晰度一般会比原图大
const canvasStyle = computed(() => {
    const sty: CSSProperties = {};
    if (width) sty.width = `${width * dpr}rpx`;
    if (height) sty.height = `${height * dpr}rpx`;

    return sty;
});

const onLoad = async () => {
    const query = uni.createSelectorQuery().in(instance);
    isDrawing.value = true;

    query
        .select('#myCanvas')
        .boundingClientRect()
        .exec(async (res: any) => {
            if (!res) {
                if (drawCount.value < 10) {
                    setTimeout(() => {
                        onLoad();
                    }, Math.pow(drawCount.value++, 3));
                }
                return;
            }

            drawCount.value = 0;

            const canvas = res[0]?.node;
            const ctx = canvas?.getContext('2d');

            canvas.width = res[0]?.width * dpr;
            canvas.height = res[0]?.height * dpr;
            ctx.scale(dpr, dpr);
            ctx.clearRect(0, 0, 9999, 9999);
            // 将图片先挑出来用 canvas.createImage() 转成 img
            const imgsList = dataList.filter((item) => item.type === 2);
            await Promise.all(imgsList.map((it) => getImageInfo(it.value, canvas)));
            // 依次渲染
            dataList.forEach((item) => {
                const newElement = { ...item, style: getStyle(item.style) };
                if (newElement.background) {
                    newElement.background.style = getStyle(item.background.style);
                }
                if (item.type === 0) {
                    drawText(newElement, ctx, canvas);
                } else if (item.type === 2) {
                    drawImage(newElement, ctx, canvas);
                } else if (item.type === 3) {
                    drawRect(newElement, ctx, canvas);
                }
            });
            // canvas 转成 img
            setTimeout(() => {
                uni.canvasToTempFilePath({
                    x: 0,
                    y: 0,
                    quality: 0.8,
                    width: width * dpr,
                    height: height * dpr,
                    destWidth: width * dpr,
                    destHeight: height * dpr,
                    canvas,
                    canvasId: 'myCanvas',
                    success: (res1) => {
                        src.value = res1.tempFilePath;
                        emits('setImgSrc', res1.tempFilePath);
                    },
                    complete: () => {
                        isDrawing.value = false;
                    },
                });
            }, 50);
        });
};

watchEffect(() => {
    if (dataList.length) {
        if (isDrawing.value) {
            isReDraw.value = true;
        } else {
            onLoad();
        }
    }
});
watchEffect(() => {
    if (src.value && isReDraw.value) {
        isReDraw.value = false;
        onLoad();
    }
});
</script>

<template>
    <view class="Poster">
        <image v-if="src" :src="src" :style="style" mode="aspectFit" />
        <canvas class="canvas" type="2d" id="myCanvas" :style="canvasStyle" />
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
