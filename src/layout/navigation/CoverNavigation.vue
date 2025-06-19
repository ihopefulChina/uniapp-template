<script setup lang="ts">
import { computed } from 'vue';
import { routeNames } from '~/routes';
import { useSystemInfo } from '~/state/useSystemInfo';
import { MMNavigationType, navigationTypeStyleMap } from './const';

interface IStickyNavigationProps {
    /** 是否isTab */
    isTab?: boolean;
    /** 标题 */
    title?: string;
    /** 导航类型 */
    type?: MMNavigationType;
    /** 隐藏导航栏高度 */
    hidenSpace?: boolean;
    /** 自定义样式 */
    customStyle?: Record<string, any>;
}
const systemInfo = useSystemInfo();
/** 父传子参数 */
const props = defineProps<IStickyNavigationProps>();

const navTypeStyle = computed(() => navigationTypeStyleMap?.[props.type || MMNavigationType.Default]);

const onNav = async () => {
    let result = true;
    const { length } = getCurrentPages();

    if (!result) return;
    if (length > 1) {
        uni.navigateBack({ delta: 1 });
    } else {
        uni.switchTab({ url: routeNames.pagesTabbarHomeIndex });
    }
};
</script>

<template>
    <cover-view class="navFixed" :style="{ backgroundColor: navTypeStyle?.backgroundColor, height: `${systemInfo?.navHeight}px`, ...props?.customStyle }">
        <cover-view class="statusBar" :style="{ height: `${systemInfo?.statusBarHeight}px` }"></cover-view>
        <cover-view class="navMenu" :style="{ height: `${systemInfo?.navMenuHeight}px` }">
            <cover-view class="left" @click="onNav" v-if="!props?.isTab">
                <!-- <TnIcon name="left" size="40" /> -->
                <cover-image :src="props.type === MMNavigationType.Transparent_white ? './images/icon_navbar_back_white.png' : './images/icon_navbar_back_black.png'" class="icon_navbar_back_black" />
            </cover-view>
            <cover-view class="title" :style="{ color: navTypeStyle?.color }">
                {{ props?.title ?? '' }}
            </cover-view>
        </cover-view>
    </cover-view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
