<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app';
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import { useGlobalStore } from '~/state/useGlobalStore';

const globalStore = useGlobalStore();

onShow(() => {
    globalStore.getUserInfo();
});
</script>
<template>
    <PageContainer isTab>
        <view class="mine">
            <Navigation title="个人中心" isTab />
            {{ globalStore.userInfo?.id }}
        </view>
    </PageContainer>
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
