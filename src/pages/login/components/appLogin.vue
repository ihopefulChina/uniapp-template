<script setup lang="ts">
import { computed } from 'vue';
import { useLockFn } from '~/hooks';
import { navTo } from '~/hooks/useNavigation';

const isAgree = ref(false); // 是否同意用户协议
const tipsShow = ref(false); // 提示框是否显示
const mobile = ref('');
const verificationCode = ref('');

const jumpAgreement = () => {
    navTo('pagesCommonAgreementIndex');
};
const handelerAgree = () => {
    isAgree.value = !isAgree.value;
    if (isAgree.value) {
        tipsShow.value = false;
    }
};

const submit = useLockFn(async () => {
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
});
/* 提交表单 */
const isDisabled = computed(() => {
    return !mobile.value || !verificationCode.value || !isAgree.value;
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
                <button class="btn default" type="submit" @click="submit" :class="{ isDisabled: isDisabled }">保存</button>
            </view>
        </veiw>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
