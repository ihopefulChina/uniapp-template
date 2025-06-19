<script lang="ts" setup>
import { ref } from 'vue';
import TnOverlay from '~/uni_modules/tuniaoui-vue3/components/overlay/src/overlay.vue';
import { isArray } from '~/utils/is';
import { UToastPramsVO } from './type';

const isShow = ref<boolean>(false);
const tmpConfig = ref<UToastPramsVO>();
let timer: any = null;

const showToast = (toastObj: UToastPramsVO) => {
    isShow.value = !!toastObj?.content;
    tmpConfig.value = toastObj;
    const duration = toastObj?.duration ?? 1500;
    timer = setTimeout(() => {
        // 倒计时结束，清除定时器，隐藏toast组件
        clearTimer();
        // 判断是否存在callback方法，如果存在就执行
        typeof toastObj?.complete === 'function' && toastObj?.complete();
    }, duration);
};

const clearTimer = () => {
    isShow.value = false;
    tmpConfig.value = undefined;
    // 清除定时器
    clearTimeout(timer);
    timer = null;
};

defineExpose({
    /**
     * @description: 显示通知
     */
    show: showToast,
});
</script>

<template>
    <TnOverlay :show="isShow" :opacity="0" :zIndex="9999999" v-if="tmpConfig">
        <view class="toast__content" :class="[tmpConfig?.icon ? 'toast_type' : '', 'type_' + tmpConfig?.icon]">
            <image v-if="tmpConfig?.icon === 'warning'" src="./images/warningIcon.png" class="icon" />
            <image v-else-if="tmpConfig?.icon === 'success'" src="./images/successIcon.png" class="icon" />
            <image v-if="tmpConfig?.icon === 'error'" src="./images/warningIcon.png" class="icon" />
            <view class="toast__content__text" v-if="tmpConfig?.content && isArray(tmpConfig?.content)">
                <text class="toast__content__text_value" v-for="(it, index) in tmpConfig?.content" :key="it + index">{{ it }}</text>
            </view>
            <view class="toast__content__text" v-else>
                {{ tmpConfig?.content }}
            </view>
        </view>
    </TnOverlay>
</template>

<style lang="scss" scoped>
.toast__content {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 400rpx;
    // background: #000000;
    border-radius: 8rpx;
    // opacity: 0.8;
    background-color: #595959;
    padding: 16rpx 30rpx;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    &.toast_type {
        width: 272rpx;
        min-height: 272rpx;

        border-radius: 24rpx;
        padding: 56rpx 24rpx;
        .icon {
            width: 80rpx;
            height: 80rpx;
            margin-bottom: 32rpx;
        }
    }
    .toast__content__text {
        font-size: 26rpx;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ffffff;
        line-height: 40rpx;
        display: flex;
        flex-direction: column;
    }
    .toast__content__text_value {
        line-height: 42rpx;
    }
}
</style>
