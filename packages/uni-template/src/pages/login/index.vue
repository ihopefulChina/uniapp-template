<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app'
import PageContainer from '~/layout/pageContainer/PageContainer.vue'
import AppLogin from './components/appLogin.vue'

onLoad(() => {
  uni.removeStorageSync('loginLock')
})
</script>

<template>
  <PageContainer className="loginPage">
    <AppLogin />
  </PageContainer>
</template>

<style lang="scss" scoped></style>
