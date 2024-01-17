<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-10 10:19:16
 * @FilePath: /LX001413-weiyunbao-app/src/pages/template/index.vue
 * @Description: 页面 - 模板
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts" setup>
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import { UpWorkOrderWebListVo } from '~/request/data-contracts';
import Item from './components/item/Item.vue';

const detail = ref<UpWorkOrderWebListVo>();

const onChange = () => {
    detail.value = { id: 1 };
};
</script>

<template>
    <PageContainer className="page">
        <Navigation title="xxx" />
        <Item :item="detail" @onChange="onChange" />
    </PageContainer>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
