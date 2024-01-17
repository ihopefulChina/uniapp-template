<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:31:58
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-26 09:48:40
 * @FilePath: /uniapp_template/src/pages/login/index.vue
 * @Description: 页面 - 登录
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { onLoad } from '@dcloudio/uni-app';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';
import AppLogin from './components/appLogin.vue';

onLoad(() => {
    uni.removeStorageSync('loginLock');
});
</script>

<template>
    <PageContainer className="loginPage">
        <AppLogin />
    </PageContainer>
</template>

<style lang="scss" scoped></style>
