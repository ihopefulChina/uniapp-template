<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:31:58
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-20 17:25:35
 * @FilePath: /uniapp_template/src/pages/tabbar/mine/index.vue
 * @Description: 页面 - 个人中心
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import PageContainer from '~/layout/pageContainer/index.vue';
import Navigation from '~/layout/navigation/index.vue';
import { useLocale } from '~/hooks';
import TabBar from '~/components/tabbar/index.vue';

const { t } = useLocale();
</script>
<template>
    <PageContainer>
        <view class="ming_page">
            <Navigation isTab :title="t('common.mine_title')" />
        </view>
    </PageContainer>
    <TabBar />
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
