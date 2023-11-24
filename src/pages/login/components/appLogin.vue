<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:32:15
 * @FilePath: /uniapp_template/src/pages/login/components/appLogin.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import StickyNavigation from '~/layout/stickyNavigation/index.vue';
import { api } from '~/request';
import { useGlobalStore } from '~/state/useGlobalStore';
import { useModal } from '~/layout/pageContainer/useModal';
import { useMyRoute } from '~/hooks';
import { routeNames } from '~/routes';
import { ClientType } from '~/enums/common';
import { useToast } from '~/layout/pageContainer/useToast';
import { MemberOutputDto } from '~/request/data-contracts';
import { computed, nextTick, ref } from 'vue';
import { onShow } from '@dcloudio/uni-app';

const { navigate } = useMyRoute();
const modalStore = useModal();
const globalStore = useGlobalStore(); // 全局状态
const toastStore = useToast();
const isAgree = ref(false); // 是否同意用户协议
const tipsShow = ref(false); // 提示框是否显示
const mobile = ref('');
const wxCode = ref('');
const verificationCode = ref('');
const osName = ref('false');

const jumpAgreement = () => {
    navigate('pagesCommonAgreementIndex');
};
const handelerAgree = () => {
    isAgree.value = !isAgree.value;
    if (isAgree.value) {
        tipsShow.value = false;
    }
};

const onTips = (data?: MemberOutputDto, errCode?: number) => {
    if (errCode === 99999) {
        toastStore?.toast({ message: '该账号已被禁用，无法登录' });
        return;
    }

    if (globalStore?.loginClient === ClientType.Staff && !data?.staff) {
        modalStore.showModal({
            title: '抱歉',
            content: '该员工账号已被禁用，无法登录',
            showCancel: false,
            confirmColor: '#FA9240',
        });
        uni.switchTab({ url: routeNames.pagesTabbarHomeIndex });
        return;
    }

    if (globalStore?.loginClient === ClientType.Client && !data?.status) {
        modalStore.showModal({
            title: '抱歉',
            content: '该用户账号已被禁用，无法登录',
            showCancel: false,
            confirmColor: '#FA9240',
        });
        uni.switchTab({ url: routeNames.pagesTabbarHomeIndex });
        return;
    }

    if (data?.token) {
        uni.setStorageSync('token', data?.token);
    }

    nextTick(() => {
        globalStore?.setUserInfo(data);
    });

    uni.navigateBack();
};

const onValidate = async () => {
    if (!mobile.value) {
        uni.showToast({ title: '请输入手机号', icon: 'none' });
        return;
    }
    if (!/^1[3456789]\d{9}$/.test(mobile.value)) {
        uni.showToast({ title: '手机号输入错误', icon: 'none' });
        return;
    }
    if (!verificationCode.value) {
        uni.showToast({ title: '请输入验证码', icon: 'none' });
        return;
    }
    if (verificationCode.value.length > 6) {
        uni.showToast({ title: '验证码输入错误', icon: 'none' });
        return;
    }
    if (!isAgree.value) {
        tipsShow.value = true;
        return;
    }
    const { data, code: errCode } = await api['/wechat/auth/token_GET']({
        mobile: mobile.value,
        verificationCode: verificationCode.value,
        type: wxCode.value ? 2 : 1,
        code: wxCode.value,
    });

    onTips(data, errCode);
};
/* 提交表单 */
const isDisabled = computed(() => {
    return !mobile.value || !verificationCode.value || !isAgree.value;
});

const initData = async () => {
    // 获取系统信息
    const systemInfo = uni.getSystemInfoSync();
    // 应用程序版本号
    if (systemInfo.osName !== 'ios') {
        osName.value = 'true';
        return;
    }
    const key = systemInfo.appWgtVersion;
    const { data } = await api['/wechat/mall/config/queryByAppKey_GET']({ key });
    osName.value = data || 'false';
};
onShow(() => {
    initData();
});
</script>

<template>
    <view class="loginPage">
        <StickyNavigation title="登录" />
        <view class="allPageBg whiteBg zindex-10"></view>

        <veiw class="login-container">
            <view class="input-container">
                <view class="input-phone-type">+86</view>
                <input type="number" v-model="mobile" class="input-phone-text" placeholder="请输入手机号" />
            </view>
            <view class="input-container mt-3">
                <input v-model="verificationCode" type="number" maxlength="6" placeholder="请输入验证码" />
            </view>

            <view class="mt-3 flex flex-start common_agreement" style="justify-content: flex-start" @click.prevent.stop="handelerAgree">
                <view class="common_login_label">我已阅读理解并同意</view>
                <view class="common_login_agreement" @click.prevent.stop="jumpAgreement">《用户协议》</view>
            </view>
            <view class="publicButton mt-10">
                <button class="btn default" type="submit" @click="onValidate" :class="{ isDisabled: isDisabled }">保存</button>
            </view>
        </veiw>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
