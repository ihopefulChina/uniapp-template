<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:31:58
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:31:43
 * @FilePath: /uniapp_template/src/pages/login/index.vue
 * @Description: 页面 - 登录
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import PageContainer from '~/layout/pageContainer/index.vue';
import AppLogin from './components/appLogin.vue';
import { onLoad } from '@dcloudio/uni-app';

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
