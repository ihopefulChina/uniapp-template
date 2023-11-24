<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-26 17:54:01
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:04:11
 * @FilePath: /uniapp_template/src/layout/pageContainer/modal/index.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts">
export default { name: 'Modal' };
</script>
<script lang="ts" setup>
import TnOverlay from '~/uni_modules/tuniaoui-vue3/components/overlay/src/overlay.vue';
import Gap from '~/components/common/gap/index.vue';
import { ShowModalOptions } from './type';
import { isArray } from '~/utils/is';
import { useModal } from '../useModal';
import { nextTick, ref } from 'vue';

const tmpConfig = ref<ShowModalOptions>();

const modalStore = useModal();
const showModal = (toastObj?: ShowModalOptions) => {
    tmpConfig.value = toastObj;
};

/** 关闭弹窗 */
const close = () => {
    nextTick(() => {
        showModal(undefined);
        modalStore.showModal(undefined);
    });
};

/** 取消事件 */
const cancel = async () => {
    try {
        await tmpConfig?.value?.success?.({ cancel: true, confirm: false });
        close();
    } catch (e) {
        //TODO handle the exception
    }
};

/** 确定事件 */
const success = async () => {
    try {
        await tmpConfig?.value?.success?.({ cancel: false, confirm: true });
        close();
    } catch (e) {
        //TODO handle the exception
    }
};

defineExpose({
    /**
     * @description: 显示Modal
     */
    showModal,
});
</script>

<template>
    <TnOverlay :show="modalStore?.isShowModal" @click="close" :opacity="0.5" :zIndex="999999999" v-if="tmpConfig">
        <view class="common_modal__center">
            <view class="common_modal__container">
                <view class="common_modal__title" v-if="tmpConfig?.title">
                    {{ tmpConfig?.title ?? '' }}
                </view>
                <view class="common_modal__content" v-if="tmpConfig?.content && isArray(tmpConfig?.content)">
                    <view class="common_modal__content__text" v-for="(it, index) in tmpConfig?.content" :key="it + index">
                        {{ it }}
                        <Gap :height="tmpConfig?.contentGap" v-if="index + 1 < tmpConfig?.content?.length" />
                    </view>
                </view>

                <view class="common_modal__content" v-else-if="tmpConfig?.content">
                    {{ tmpConfig?.content }}
                </view>
            </view>
            <view class="common_modal__btns">
                <view
                    class="common_modal__btn_cancel"
                    v-if="tmpConfig?.showCancel !== undefined ? tmpConfig?.showCancel : true"
                    :style="{ color: tmpConfig?.cancelColor ?? '#2A2827' }"
                    @click="cancel"
                >
                    {{ tmpConfig?.cancelText ?? '取消' }}
                </view>

                <view class="common_modal__btn_confirm" :style="{ color: tmpConfig?.confirmColor ?? '#FA9240' }" @click="success">
                    {{ tmpConfig?.confirmText ?? '确定' }}
                </view>
            </view>
        </view>
    </TnOverlay>
</template>

<style lang="scss" scoped>
.common_modal__center {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 590rpx;
    background: #ffffff;
    border-radius: 20rpx;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.common_modal__container {
    padding: 60rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
.common_modal__title {
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2a2827;
    line-height: 48rpx;
}
.common_modal__content {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 32rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7f7e7d;
    line-height: 48rpx;
}
.common_modal__title + .common_modal__content {
    margin-top: 32rpx;
}

.common_modal__btns {
    width: 100%;
    display: flex;
    align-items: center;
    height: 110rpx;
    border-top: 1rpx solid rgba(0, 0, 0, 0.1);
}
.common_modal__btn_cancel {
    height: 100%;
    flex: 1;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #2a2827;
    line-height: 48rpx;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.common_modal__btn_confirm {
    height: 100%;
    flex: 1;
    font-size: 34rpx;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #fa9240;
    line-height: 48rpx;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.common_modal__btn_cancel + .common_modal__btn_confirm {
    border-left: 1rpx solid rgba(0, 0, 0, 0.1);
}
</style>
