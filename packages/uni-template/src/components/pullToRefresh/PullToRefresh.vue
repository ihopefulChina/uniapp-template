<script lang="ts" setup>
import { CSSProperties, ComputedRef, Ref, computed, getCurrentInstance, onMounted, ref, toRefs } from 'vue';
import Gap from '~/components/common/gap/Gap.vue';
import { useLockFn } from '~/hooks';
import { useSystemInfo } from '~/state/useSystemInfo';
import TnLoadmore from '~/uni_modules/tuniaoui-vue3/components/loadmore/src/loadmore.vue';
import { selectRect } from '~/utils/uniApi';
import { MMPullToRefreshState } from './const';

/** 设置自定义下拉刷新阈值 */
const REFRESHER_THRESHOLD = 45;

interface IMMPullToRefreshProps {
  /** 刷新状态 */
  state: Ref<MMPullToRefreshState>;
  /** 没有更多 */
  noMore: Ref<boolean>;
  /** 是否显示没有更多文案，默认显示 */
  hiddeNoMoreText?: boolean;
  /** 是否空数据 */
  isEmpty?: ComputedRef<boolean>;
  /** 列表高度 */
  height?: number;
  /** styles */
  styles?: CSSProperties;
  /** isTab */
  isTab?: boolean;
  /** 背景颜色 */
  refresherBackground?: string;
  /** 底部空间高度 rpx */
  footerSpace?: number;
  /** 页面滚动回掉 */
  onScroll?: (e: any) => void;
}

/** 子传父事件 */
const emits = defineEmits<{
  (e: 'onRefresh'): void;
  // eslint-disable-next-line @typescript-eslint/unified-signatures
  (e: 'onReachBottom'): void;
}>();
const systemInfo = useSystemInfo();
const instance = getCurrentInstance(); // 获取组件实例

/** 父传子参数 */
const props = defineProps<IMMPullToRefreshProps>();
const { noMore, state, isEmpty } = toRefs(props);

/** 列表高度计算 */
const scollViewHeight = ref<number>();
const calculateScrollViewHeight = async () => {
  let scrollViewHeight = props?.height;
  try {
    if (!scrollViewHeight) {
      const topViewRes: any = await selectRect('#MMPullToRefreshTop', instance!);

      scrollViewHeight = systemInfo?.screenHeight - topViewRes?.top;
    }
  } catch (error) {
    console.warn(error);
  }

  scollViewHeight.value = props?.isTab && scrollViewHeight ? scrollViewHeight - systemInfo?.tabbarHeight : scrollViewHeight;
};
onMounted(() => {
  calculateScrollViewHeight();
});

/** 加载更多status */
const status = computed<'loading' | 'nomore' | undefined>(() => {
  if (state?.value === MMPullToRefreshState.pushing) {
    return 'loading';
  } else if (state.value !== MMPullToRefreshState.refreshing && noMore) {
    return 'nomore';
  }
  return undefined;
});

/** 开启自定义下拉刷新 */
// const refresherTriggered = computed(() => state?.value === MMPullToRefreshState.refreshing);
const refresherTriggered = ref<boolean>(false);
/** 刷新列表 */
const refresherrefresh = useLockFn(async () => {
  refresherTriggered.value = true;
  if (state.value === MMPullToRefreshState.none) {
    emits('onRefresh');
    setTimeout(() => {
      refresherTriggered.value = false;
    }, 500);
  }
});

const onScroll = (event: any) => {
  props.onScroll?.(event);
};

/** 下拉更多 */
const scrolltolower = () => {
  if (!noMore?.value) {
    emits('onReachBottom');
  }
};
</script>

<template>
  <view class="MMPullToRefresh" :style="{ height: `${scollViewHeight}px` }">
    <view id="MMPullToRefreshTop" />
    <!-- <view class="pullHead" v-if="refresherTriggered">
            <TnLoadmore size="36" status="loading" color="#999" :loadingText="false" loadingIconMode="flower" />
        </view> -->
    <scroll-view
      scroll-y
      scroll-with-animation
      enable-back-to-top
      refresher-enabled
      refresher-default-style="black"
      :refresher-threshold="REFRESHER_THRESHOLD"
      :refresher-triggered="refresherTriggered"
      :refresher-background="props?.refresherBackground ?? '#fff'"
      class="simplePullToRefresh"
      :style="{ ...props.styles }"
      @refresherrefresh="refresherrefresh"
      @scrolltolower="scrolltolower"
      @scroll="onScroll"
    >
      <!-- <slot name="refresher">
        <view class="pullHead">
          <TnLoadmore size="36" status="loading" color="#999" :loading-text="false" loading-icon-mode="flower" />
        </view>
      </slot>  -->
      <slot />

      <view v-if="!isEmpty && (status !== 'nomore' || (status === 'nomore' && !props.hiddeNoMoreText))" class="noMore">
        <TnLoadmore v-if="status" :status="status" color="#999" loading-icon-mode="flower" />
      </view>
      <Gap v-if="props?.footerSpace" :height="props?.footerSpace" :styles="{ width: '100%' }" />
    </scroll-view>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
