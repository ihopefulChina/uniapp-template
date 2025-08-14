<script lang="ts" setup>
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import { ResActivityPlayGoodsDto } from '~/request/data-contracts';
import Item from './components/item/Item.vue';
import { ref } from 'vue';

const detail = ref<ResActivityPlayGoodsDto>();

const onChange = () => {
  detail.value = { id: 1 };
};
</script>

<template>
  <PageContainer class-name="page">
    <Navigation title="xxx" />
    <Item :item="detail" @on-change="onChange" />
  </PageContainer>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
