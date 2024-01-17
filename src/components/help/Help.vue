<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:21:01
 * @FilePath: /uniapp_template/src/components/help/Help.vue
 * @Description: 组件 - 开发调试工具
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts" setup>
import { nextTick, ref, watchEffect } from 'vue';
import { CUSTOM_ENVIRONMENT_TEXT, isDev, urls } from '~/config';

import { useToast } from '~/layout/pageContainer/useToast';
import { api } from '~/request';
import { routeNames } from '~/routes';
import { useBaseUrlStore } from '~/state/useBaseUrlStore';
import { useGlobalStore } from '~/state/useGlobalStore';
import TnPopup from '~/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue';
import TnSubsectionItem from '~/uni_modules/tuniaoui-vue3/components/subsection/src/subsection-item.vue';
import TnSubsection from '~/uni_modules/tuniaoui-vue3/components/subsection/src/subsection.vue';
import { cleanToken, copyToken } from './tool';

const baseUrlStore = useBaseUrlStore(); //接口
const globalStore = useGlobalStore(); // 全局状态
const toastStore = useToast();

/** 打开弹窗 */
const visible = ref(false);
/** 打开 */
const open = () => {
    visible.value = true;
};
const close = () => {
    visible.value = false;
};
// 当前选中的标签索引
const currentTabIndex = ref(0);

/** 切换环境 */
const envList = ref(urls);
const currentEnv = ref(baseUrlStore?.baseUrl ?? urls?.[0]?.value);

watchEffect(() => {
    if (baseUrlStore?.baseUrl) {
        currentEnv.value = baseUrlStore?.baseUrl;
    } else {
        currentEnv.value = `${urls?.[0]?.value ?? ''}`;
    }
});
const switchEnv = (item: any) => {
    if (item?.text === CUSTOM_ENVIRONMENT_TEXT) {
        showCustomEnv();
        return;
    }
    if (item?.value) {
        baseUrlStore?.changeApiUrl?.(`${item?.value ?? ''}`);
        currentEnv.value = item?.value;
        close();
        uni.showToast({ title: '切换成功', icon: 'success' });
    }
};

/** 自定义环境值 */
const customEnv = ref('');
/** 自定义环境弹窗 */
const customEnvVisible = ref(false);
const showCustomEnv = () => {
    close();
    customEnvVisible.value = true;
};
const closeCustomEnv = () => {
    customEnvVisible.value = false;
    customEnv.value = '';
};
const changeCustomEnv = () => {
    const newList = envList.value;
    const findIndex = newList.findIndex((item) => item.text === CUSTOM_ENVIRONMENT_TEXT);
    if (findIndex > -1) {
        newList[findIndex] = {
            text: CUSTOM_ENVIRONMENT_TEXT,
            value: customEnv.value,
        };
    }
    envList.value = newList;
    baseUrlStore?.changeApiUrl?.(`${customEnv.value ?? ''}`);
    currentEnv.value = customEnv?.value;

    closeCustomEnv();
    uni.showToast({ title: '切换成功', icon: 'success' });
};

/** 切换用户 id */
const useId = ref<string>(uni.getStorageSync('userInfo')?.id || '');
const switchShow = ref<boolean>(false); // 切换用户 id 弹窗
const userList = [
    { text: '切换用户', value: 'switch' },
    { text: '复制 Token', value: 'copy' },
    { text: '清除 Token', value: 'clean' },
];
const changeSwitch = (value: string) => {
    if (value === 'copy') {
        copyToken();
    } else if (value === 'clean') {
        cleanToken();
    } else if (value === 'switch') {
        switchShow.value = true;
    }
    close();
};

/** 切换用户 id */
const changeUseId = async () => {
    const registerID = uni.getStorageSync('registerID');
    const { data } = await api['/wechat/auth/test_GET']({ id: Number(useId?.value), registrationId: registerID });
    uni.setStorageSync('token', data?.token);
    switchShow.value = false;
    nextTick(() => {
        globalStore?.getUserInfo();
    });
    toastStore.showToast({ content: '切换成功', icon: 'success' });
    uni.reLaunch({ url: routeNames.pagesTabbarHomeIndex });
};
</script>

<template>
    <view v-if="isDev">
        <view class="help" @click="open">测</view>
        <!-- 调试工具 -->
        <TnPopup v-model="visible" @close="close" @open="open" width="590" :radius="20" open-direction="center" bgColor="transparent">
            <view class="help_switch_tab" v-if="visible">
                <view class="modal_title">调试工具🔨</view>
                <TnSubsection v-model="currentTabIndex" mode="button" activeColor="#497cd8" radius="16">
                    <TnSubsectionItem title="切换环境" />
                    <TnSubsectionItem title="切换用户" />
                </TnSubsection>
                <view class="switchTab">
                    <view class="help_list" v-if="currentTabIndex === 0">
                        <text class="help_list_item" :class="{ help_list_item_current: currentEnv === item?.value }" v-for="item in envList" :key="item?.value" @click="switchEnv(item)">
                            {{ item?.text }}
                        </text>
                    </view>
                    <view class="help_list" v-if="currentTabIndex === 1">
                        <text class="help_list_item" v-for="item in userList" :key="item?.value" @click="changeSwitch(item?.value)">{{ item?.text }}</text>
                    </view>
                </view>
            </view>
        </TnPopup>

        <!-- 修改用户Id -->
        <TnPopup v-model="switchShow" @close="switchShow = false" @open="switchShow = true" width="590" :radius="20" open-direction="center">
            <view class="modal_view" v-if="switchShow">
                <text class="modal_title">修改用户Id</text>
                <view class="input_view">
                    <input class="input" placeholder="请输入Id" v-model="useId" />
                </view>
                <view class="btn_view">
                    <view class="btn cancel_btn" @click="switchShow = false">取消</view>
                    <view class="btn confim_btn" @click="changeUseId">确认</view>
                </view>
            </view>
        </TnPopup>

        <!-- 自定义环境 -->
        <TnPopup v-model="customEnvVisible" @close="closeCustomEnv" @open="showCustomEnv" width="590" :radius="20" open-direction="center">
            <view class="modal_view" v-if="customEnvVisible">
                <text class="modal_title">自定义环境</text>
                <view class="input_view">
                    <input class="input" placeholder="请输入自定义地址" v-model="customEnv" />
                </view>
                <view class="btn_view">
                    <view class="btn cancel_btn" @click="closeCustomEnv">取消</view>
                    <view class="btn confim_btn" @click="changeCustomEnv">确认</view>
                </view>
            </view>
        </TnPopup>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
