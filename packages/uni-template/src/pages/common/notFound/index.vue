<script lang="ts" setup>
import { redirectTo } from '~/hooks/useNavigation'
import { MMNavigationType } from '~/layout/navigation/const'
import Navigation from '~/layout/navigation/Navigation.vue'
import PageContainer from '~/layout/pageContainer/PageContainer.vue'

/**
 * 返回首页
 */
const backHome = () => {
  redirectTo('pagesTabbarHomeIndex')
}
</script>

<template>
  <PageContainer>
    <Navigation title="Not Found" :type="MMNavigationType.Transparent" />

    <view class="publicButton">
      <button class="backToHomePage btn default ht80" @click="backHome">返回首页</button>
    </view>
  </PageContainer>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
