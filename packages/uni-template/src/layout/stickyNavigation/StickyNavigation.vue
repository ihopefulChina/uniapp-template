<script lang="ts" setup>
import { MMNavigationType } from '~/layout/navigation/const';
import Navigation from '~/layout/navigation/Navigation.vue';
import { useSystemInfo } from '~/state/useSystemInfo';

import nav_bg from './images/nav_bg.png';

/** 带背景图片的粘性布局导航栏 */
interface IStickyNavigationProps {
  /** 标题 */
  title?: string;
  /** 背景图片 */
  backgroundImage?: string;
  /** 背景高度 */
  backgroundHieght?: number;
  /** 隐藏导航栏高度 */
  hidenSpace?: boolean;
  /** 是否是 tab 页面 */
  isTab?: boolean;
  /** 显示自定义标题 */
  showCustomTitle?: boolean;
}

/** 父传子参数 */
const props = defineProps<IStickyNavigationProps>();

const systemInfo = useSystemInfo();
</script>

<template>
  <view>
    <view
      class="stickyNavigation"
      :style="{
        backgroundSize: `100% calc(100vw * ${props?.backgroundHieght || 236} / 375)`,
        backgroundImage: `url(${props?.backgroundImage || nav_bg})`,
      }"
    >
      <Navigation :is-tab="props?.isTab" :title="props?.showCustomTitle ? '' : props?.title" :type="MMNavigationType.Transparent" :hiden-space="hidenSpace">
        <template #customTitle>
          <view class="custrom_nav" :style="{ height: `${systemInfo?.navMenuHeight}px` }">
            <text v-if="props?.showCustomTitle">
              {{ title }}
            </text>
          </view>
        </template>
      </Navigation>
      <slot name="content" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
