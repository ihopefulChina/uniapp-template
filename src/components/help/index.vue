<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:00:36
 * @FilePath: /uniapp_template/src/components/help/index.vue
 * @Description: 组件 - 开发调试工具
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'Help' };
</script>

<script lang="ts" setup>
import { computed, nextTick, ref, toRefs } from 'vue';
import { isDev, urls, isI18n, languages } from '~/config';
import { copyToken, cleanToken } from './tool';
import { useBaseUrlStore } from '~/state/useBaseUrlStore';
import { api } from '~/request';
import { useGlobalStore } from '~/state/useGlobalStore';
import { TnActionSheetInstance } from '~/uni_modules/tuniaoui-vue3';
import TnActionSheet from '~/uni_modules/tuniaoui-vue3/components/action-sheet/src/action-sheet.vue';
import TnPopup from '~/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue';
import TnRadio from '~/uni_modules/tuniaoui-vue3/components/radio/src/radio.vue';
import TnRadioGroup from '~/uni_modules/tuniaoui-vue3/components/radio/src/radio-group.vue';

import { useLocale } from '~/hooks';

const baseUrlStore = useBaseUrlStore(); //接口
const globalStore = useGlobalStore(); // 全局状态
const actionSheetRef = ref<TnActionSheetInstance>(); // 操作弹窗

/** 切换用户 id */
const useId = ref<string>(uni.getStorageSync('userInfo')?.id || '');
const switchShow = ref<boolean>(false); // 切换用户 id 弹窗

/** 多语言 */
const visibleLanguages = ref<boolean>(false); // 切换语言弹窗
const locale = useLocale();
const { language } = toRefs(locale);

/** 列表数据 */
const list = computed(() => {
    const newList = [...urls, { text: '复制 Token', value: 'copy' }, { text: '清除 Token', value: 'clean' }, { text: '切换用户', value: 'switch' }];
    if (isI18n) {
        newList.push({ text: '切换语言', value: 'switchLanguages' });
    }
    return newList?.map((it) => {
        if (it?.value === baseUrlStore?.baseUrl) {
            return { ...it, desc: '当前接口' };
        }
        return { ...it, desc: '' };
    });
});

/** 切换用户 id */
const changeUseId = async () => {
    const { data } = await api['/wechat/auth/test_GET']({ id: Number(useId?.value) });
    uni.setStorageSync('token', data);
    switchShow.value = false;
    nextTick(() => {
        globalStore?.getUserInfo();
    });
    uni.showToast({ title: '切换成功' });
};

/** 切换语言 */
const changeLocale = (val: any) => {
    locale.switchLocale(val);
    visibleLanguages.value = false;
    uni.showToast({ title: '切换成功', icon: 'success' });
};

/** 打开actionSheet */
const openActionSheet = () => {
    actionSheetRef.value?.show({
        title: '测试工具',
        actions: list?.value,
        select: (__, value) => {
            if (value === 'copy') {
                copyToken();
            } else if (value === 'clean') {
                cleanToken();
            } else if (value === 'switch') {
                switchShow.value = true;
            } else if (value === 'switchLanguages') {
                visibleLanguages.value = true;
            } else {
                value && baseUrlStore?.changeApiUrl?.(`${value ?? ''}`);

                uni.showToast({ title: '切换成功', icon: 'success' });
            }
            return true;
        },
    });
};
</script>

<template>
    <view v-if="isDev">
        <TnActionSheet ref="actionSheetRef" />

        <view class="help" @click="openActionSheet">测</view>
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
        <!-- 切换语言 -->
        <TnPopup v-model="visibleLanguages" width="590" :radius="20" open-direction="center">
            <view class="modal_view" v-if="visibleLanguages">
                <text class="modal_title">切换语言</text>
                <view class="radio_view">
                    <TnRadioGroup v-model="language" @change="changeLocale" border>
                        <TnRadio :label="item" v-for="item in languages" :key="item">{{ item }}</TnRadio>
                    </TnRadioGroup>
                </view>
            </view>
        </TnPopup>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
