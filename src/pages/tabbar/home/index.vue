<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app';
import Empty from '~/components/common/empty/Empty.vue';
import Help from '~/components/help/Help.vue';
import { NetworkStatus } from '~/enums/common';
import { useNetworkStatus } from '~/hooks/useNetworkStatus';
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import { useGlobalStore } from '~/state/useGlobalStore';
import List from './components/list/List.vue';

const globalStore = useGlobalStore();
/** 监听网络变化 */
const networkStatus = useNetworkStatus();

const condition = ref<string>();

onShow(() => {
    globalStore.getUserInfo();
});
</script>
<template>
    <PageContainer isTab>
        <view class="home">
            <Navigation title="首页" isTab />
            <!-- 列表 -->
            <List :condition="condition" />

            <!-- 网络连接失败 -->
            <Empty :marginTop="440" emptyStr="网络连接失败" v-if="networkStatus.networkType?.value === NetworkStatus.NONE" />

            <Help />
        </view>
    </PageContainer>
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
