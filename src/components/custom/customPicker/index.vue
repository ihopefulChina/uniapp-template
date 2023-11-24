<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-23 10:38:26
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:28:10
 * @FilePath: /uniapp_template/src/components/custom/customPicker/index.vue
 * @Description: 组件 - 自定义 Picker
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'CustomPicker' };
</script>

<script setup lang="ts">
import { isNumber } from '~/utils/is';
import TnPopup from '~/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue';
import { onMounted, ref, toRefs } from 'vue';

interface ICardTitleProps {
    /** 弹窗开关 */
    modelValue: boolean;
    /** 按钮名称 */
    btnStr?: string;
    /** 标题 */
    title?: string;
    /** 是否显示关闭icon */
    showClose?: boolean;
    /** 显示 key */
    keyValye?: string;
    /** list */
    list: string[];
    /** 值 */
    pickerValue: Array<number | undefined>;
}

const props = defineProps<ICardTitleProps>();
const { modelValue } = toRefs(props);
const value = ref<Array<number | undefined>>(props?.pickerValue);

interface IColumnProps {
    value: String | Number | undefined;
    label: String;
}
const emits = defineEmits<{
    (e: 'update:modelValue', data?: Boolean): void;
    (e: 'confirm', data?: IColumnProps | Array<number>): void;
    (e: 'closePopup'): void;
}>();

const pickerChange = (e: any) => {
    value.value = e.detail.value;
};

const confirm = () => {
    /** change时赋值会有延迟需延时处理 */
    setTimeout(() => {
        emits('confirm', value?.value as any);
    }, 200);
};
onMounted(() => {
    value.value = isNumber(props.pickerValue[0]) ? props.pickerValue : [0];
});
</script>
<template>
    <TnPopup v-model="modelValue" @close="emits('update:modelValue', false)" @open="emits('update:modelValue', true)" :radius="30" open-direction="bottom">
        <view class="zx-pay-popup">
            <view class="flex flex-ai flex-jc-sb pr-3">
                {{ props.title }}
                <image v-if="!props.showClose" @click="emits('closePopup')" class="common_pay_popup_close" src="./images/icon_dialog_close.png" mode=""></image>
            </view>
            <view class="picker_dv_box">
                <picker-view class="picker_view" :value="value" @change="pickerChange" indicatorStyle="height: 44PX;" immediate-change>
                    <picker-view-column class="picker_column">
                        <view class="picker_item" :class="value[0] == index ? 'picker_item_on' : ''" v-for="(val, index) in props?.list" :key="val?.valueOf">
                            {{ props?.keyValye ? val[props?.keyValye as any] : val }}
                        </view>
                    </picker-view-column>
                </picker-view>
            </view>
            <view class="common_shadow publicButton plr-3 ptb-2">
                <view class="btn default ml18" @click="confirm">{{ props.btnStr || '确定' }} </view>
            </view>
        </view>
    </TnPopup>
</template>
<style lang="scss" scoped>
.picker_item {
    height: 88rpx;
    line-height: 88rpx;
}
</style>
