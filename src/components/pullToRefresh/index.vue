<script lang="ts">
export default { name: 'PullToRefresh' };
</script>

<script lang="ts" setup>
import TnLoadmore from '~/uni_modules/tuniaoui-vue3/components/loadmore/src/loadmore.vue';
import { useSystemInfo } from '~/state/useSystemInfo';
import { MMPullToRefreshState } from './const';
import { selectRect } from '~/utils/uniApi';
import { CSSProperties, computed, getCurrentInstance, onMounted, ref, toRefs } from 'vue';
import Gap from '~/components/common/gap/index.vue';
import { useLockFn } from '~/hooks';

/** 设置自定义下拉刷新阈值 */
const REFRESHER_THRESHOLD = 45;

interface IMMPullToRefreshProps {
    /** 刷新状态 */
    state: MMPullToRefreshState;
    /** 没有更多 */
    noMore: boolean;
    /** 是否显示没有更多文案，默认显示 */
    hiddeNoMoreText?: boolean;
    /** 是否空数据 */
    isEmpty?: boolean;
    /** 列表高度 */
    height?: number;
    /** styles */
    styles?: CSSProperties;
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

    scollViewHeight.value = scrollViewHeight;
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
            scrollY
            scrollWithAnimation
            enableBackToTop
            refresherEnabled
            refresherDefaultStyle="black"
            :refresherThreshold="REFRESHER_THRESHOLD"
            :refresherTriggered="refresherTriggered"
            :refresherBackground="props?.refresherBackground ?? '#fff'"
            @refresherrefresh="refresherrefresh"
            @scrolltolower="scrolltolower"
            @scroll="onScroll"
            class="simplePullToRefresh"
            :style="{ ...props.styles, flex: 1 }"
        >
            <!-- <slot name="refresher">
                <view class="pullHead">
                    <TnLoadmore size="36" status="loading" color="#999" :loadingText="false" loadingIconMode="flower" />
                </view>
            </slot> -->
            <slot></slot>

            <view class="noMore" v-if="!isEmpty && (status !== 'nomore' || (status === 'nomore' && !props.hiddeNoMoreText))">
                <TnLoadmore :status="status" v-if="status" color="#999" loadingIconMode="flower" />
            </view>
            <Gap :height="props?.footerSpace" v-if="props?.footerSpace" :styles="{ width: '100vw' }" />
        </scroll-view>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
