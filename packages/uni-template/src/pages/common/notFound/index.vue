<script lang="ts" setup>
import Empty from '~/components/common/empty/Empty.vue';
import { redirectTo } from '~/hooks/useNavigation';
import { MMNavigationType } from '~/layout/navigation/const';
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';

/**
 * 返回首页
 */
const backHome = () => {
  redirectTo('pagesTabbarHomeIndex');
};
</script>

<template>
  <PageContainer>
    <Navigation title="Not Found" :type="MMNavigationType.Transparent" />
    <Empty :margin-top="240" empty-str="页面找不到了">
      <template #bottom>
        <view class="publicButton">
          <button class="backToHomePage btn default ht80" @click="backHome">
            返回首页
          </button>
        </view>
      </template>
    </Empty>
  </PageContainer>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
