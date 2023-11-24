<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:31:58
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:31:37
 * @FilePath: /uniapp_template/src/pages/tabbar/home/index.vue
 * @Description: 页面 - 首页
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import PageContainer from '~/layout/pageContainer/index.vue';
import Help from '~/components/help/index.vue';
import { useGlobalStore } from '~/state/useGlobalStore';
import Navigation from '~/layout/navigation/index.vue';
import { useLocale } from '~/hooks';
import TabBar from '~/components/tabbar/index.vue';
import ImageUpload from '~/components//common/imageUpload/index.vue';
import { onShow } from '@dcloudio/uni-app';

const { t } = useLocale();
const globalStore = useGlobalStore();

onShow(() => {
    globalStore.getUserInfo();
});
</script>
<template>
    <PageContainer>
        <view class="home_page">
            <Navigation isTab :title="t('common.home_title')" />
            <ImageUpload />
            <Help />
        </view>
    </PageContainer>
    <TabBar />
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
