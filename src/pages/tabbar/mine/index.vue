<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:31:58
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:47:07
 * @FilePath: /uniapp_template/src/pages/tabbar/mine/index.vue
 * @Description: 页面 - 个人中心
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
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
