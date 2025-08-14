<script setup lang="ts">
import Empty from '~/components/common/empty/Empty.vue';
import Help from '~/components/help/Help.vue';
import { NetworkStatus } from '~/enums/common';
import { useNetworkStatus } from '~/hooks/useNetworkStatus';
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import { useGlobalStore } from '~/state/useGlobalStore';
import { useMessage, useToast } from '~/uni_modules/wot-design-uni';
import WdButton from '~/uni_modules/wot-design-uni/components/wd-button/wd-button.vue';

const globalStore = useGlobalStore();
/** 监听网络变化 */
const networkStatus = useNetworkStatus();

/** message */
const message = useMessage()

/** 消息toast */
const toast = useToast()

function confirm() {
  message
    .confirm({ msg: '提示文案', title: '标题' })
    .then(() => {
      globalStore.getUserInfo()
    })
    .catch(() => {

    })
}

function showToast() {
  toast.show('提示文案')
}

</script>
<template>
  <PageContainer isTab>
    <view class="home">
      <Navigation title="首页" isTab />

      <WdButton @click="confirm">
        点击对话框
      </WdButton>
      <WdButton @click="showToast">
        点击totst
      </WdButton>

      <!-- 网络连接失败 -->
      <Empty v-if="networkStatus.networkType?.value === NetworkStatus.NONE" :margin-top="440" emptyStr="网络连接失败" />

      <Help />
    </view>
  </PageContainer>
</template>
<style lang="scss" scoped>
@use './index.scss' as *;
</style>
