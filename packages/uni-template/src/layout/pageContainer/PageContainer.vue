<script lang="ts" setup>
import { CSSProperties } from 'vue';
import WdMessageBox from '~/uni_modules/wot-design-uni/components/wd-message-box/wd-message-box.vue';
import WdToast from '~/uni_modules/wot-design-uni/components/wd-toast/wd-toast.vue';

interface IPageContainerProps {
  /** 是否是tabbar页面 */
  isTab?: boolean;
  styles?: CSSProperties | string;
  className?: string;
}

/** 父传子参数 */
const props = defineProps<IPageContainerProps>();
</script>

<template>
  <view class="pageContainer" :style="props?.styles" :class="props?.className">
    <slot />
  </view>
  <!-- 全局提示 -->
  <WdToast />
  <!-- 全局Message -->
  <WdMessageBox />
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
