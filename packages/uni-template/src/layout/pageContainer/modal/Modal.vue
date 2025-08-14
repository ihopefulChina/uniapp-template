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
  } catch (error) {
    // handle the exception
  }
};

/** 确定事件 */
const success = async () => {
  try {
    await tmpConfig?.value?.success?.({ cancel: false, confirm: true });
    close();
  } catch (error) {
    // handle the exception
  }
};

defineExpose({
  /**
   * @description: 显示Modal
   */
  showModal
});
</script>

<template>
  <TnOverlay v-if="tmpConfig" :show="modalStore?.isShowModal" :opacity="0.5" :z-index="999999999" @click="close">
    <view class="common_modal__center">
      <view class="common_modal__container">
        <view v-if="tmpConfig?.title" class="common_modal__title">
          {{ tmpConfig?.title ?? '' }}
        </view>
        <view v-if="tmpConfig?.content && isArray(tmpConfig?.content)" class="common_modal__content">
          <view v-for="(it, index) in tmpConfig?.content" :key="it + index" class="common_modal__content__text">
            {{ it }}
            <Gap v-if="index + 1 < tmpConfig?.content?.length" :height="tmpConfig?.contentGap" />
          </view>
        </view>

        <view v-else-if="tmpConfig?.content" class="common_modal__content">
          {{ tmpConfig?.content }}
        </view>
      </view>
      <view class="common_modal__btns">
        <view v-if="tmpConfig?.showCancel !== undefined ? tmpConfig?.showCancel : true" class="common_modal__btn_cancel" :style="{ color: tmpConfig?.cancelColor ?? '#ccc' }" @click="cancel">
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
@use './index.scss' as *;
</style>
