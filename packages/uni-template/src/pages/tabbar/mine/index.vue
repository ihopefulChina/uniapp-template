<script setup lang="ts">
import { onShow } from '@dcloudio/uni-app'
import Navigation from '~/layout/navigation/Navigation.vue'
import PageContainer from '~/layout/pageContainer/PageContainer.vue'
import { useGlobalStore } from '~/store/common/useGlobalStore'

const globalStore = useGlobalStore()

onShow(() => {
  globalStore.getUserInfo()
})
</script>
<template>
  <PageContainer is-tab>
    <view class="mine">
      <Navigation title="个人中心" is-tab />
      {{ globalStore.userInfo?.id }}
    </view>
  </PageContainer>
</template>
<style lang="scss" scoped>
@use './index.scss' as *;
</style>
