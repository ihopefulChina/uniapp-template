<script setup lang="ts">
import Empty from '~/components/common/empty/Empty.vue';
import Help from '~/components/help/Help.vue';
import { NetworkStatus } from '~/enums/common';
import { useNetworkStatus } from '~/hooks/useNetworkStatus';
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import { useGlobalStore } from '~/state/useGlobalStore';

const globalStore = useGlobalStore();
/** 监听网络变化 */
const networkStatus = useNetworkStatus();

</script>
<template>
  <PageContainer is-tab>
    <view class="home">
      <Navigation title="首页" is-tab />
     
      <!-- 网络连接失败 -->
      <Empty v-if="networkStatus.networkType?.value === NetworkStatus.NONE" :margin-top="440" empty-str="网络连接失败" />

      <Help />
    </view>
  </PageContainer>
</template>
<style lang="scss" scoped>
@use './index.scss' as *;
</style>
