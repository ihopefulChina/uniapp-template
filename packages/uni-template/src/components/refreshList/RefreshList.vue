<script lang="ts" setup>
import { onPullDownRefresh, onReachBottom } from '@dcloudio/uni-app';
import { computed, toRefs } from 'vue';
import { TnLoadmore } from '~/uni_modules/tuniaoui-vue3';
import { MMPullToRefreshState } from './const';

export interface IMMPullToRefreshProps {
  state: MMPullToRefreshState;
  /** 没有更多 */
  noMore: boolean;
  /** 是否空数据 */
  isEmpty?: boolean;
}

/** 子传父事件 */
const emits = defineEmits<{
  (e: 'onRefresh'): void;
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  (e: 'onReachBottom'): void;
}>();
/** 父传子参数 */
const props = defineProps<IMMPullToRefreshProps>();
const { noMore, state, isEmpty } = toRefs(props);

// !!需要在页面添加配置 enablePullDownRefresh: true
onPullDownRefresh(async () => {
  // uni.showLoading();
  try {
    await emits('onRefresh');
    setTimeout(() => {
      uni.stopPullDownRefresh();
    }, 500);
  } catch (error) {
    // setTimeout(() => {
    //     uni?.hideLoading();
    // }, 500);
  }
});

onReachBottom(() => {
  if (!noMore?.value) {
    emits('onReachBottom');
  }
});

const status: any = computed(() => {
  if (state?.value === MMPullToRefreshState.pushing) {
    return 'loading';
  } else if (state.value !== MMPullToRefreshState.refreshing && noMore) {
    return 'nomore';
  }
  return undefined;
});
</script>

<template>
  <view class="refreshList">
    <slot />
    <view v-if="!isEmpty && status" class="noMore">
      <TnLoadmore :status="status" color="#999" />
    </view>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
