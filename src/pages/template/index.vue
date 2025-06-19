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
