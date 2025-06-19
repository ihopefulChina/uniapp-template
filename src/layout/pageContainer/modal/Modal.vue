<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import Gap from '~/components/common/gap/Gap.vue';
import TnOverlay from '~/uni_modules/tuniaoui-vue3/components/overlay/src/overlay.vue';
import { isArray } from '~/utils/is';
import { useModal } from '../useModal';
import { ShowModalOptions } from './type';

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
        // handle the exception
    }
};

/** 确定事件 */
const success = async () => {
    try {
        await tmpConfig?.value?.success?.({ cancel: false, confirm: true });
        close();
    } catch (e) {
        // handle the exception
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
                <view class="common_modal__btn_cancel" v-if="tmpConfig?.showCancel !== undefined ? tmpConfig?.showCancel : true" :style="{ color: tmpConfig?.cancelColor ?? '#ccc' }" @click="cancel">
                    {{ tmpConfig?.cancelText ?? '取消' }}
                </view>

                <view class="common_modal__btn_confirm" :style="{ color: tmpConfig?.confirmColor ?? '#497cd8' }" @click="success">
                    {{ tmpConfig?.confirmText ?? '确定' }}
                </view>
            </view>
        </view>
    </TnOverlay>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
