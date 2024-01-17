<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-27 16:56:40
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:14:31
 * @FilePath: /uniapp_template/src/components/common/myTextarea/MyTextarea.vue
 * @Description: 组件 -  文本域（uniapp 有bug，层级高，）
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts" setup>
import { ref, watch } from 'vue';

import placeholder_icon from './images/placeholder_icon.png';

interface ITextareaProps {
    /** 是否禁用 */
    disabled?: boolean;
    /** value */
    modelValue?: string;
    /**  maxlength */
    maxlength?: number;
    /** placeholder */
    placeholder?: string;
    /** width */
    width: string | number;
    /** height */
    height: string | number;
    /** 显示统计 */
    showCount?: boolean;
}

const props = defineProps<ITextareaProps>();

const emits = defineEmits<{
    (e: 'update:modelValue', data?: string): void;
}>();

const contentValue = ref<string | undefined>(props?.modelValue);
const editMode = ref<boolean>(false);

watch(
    () => props.modelValue,
    () => (contentValue.value = props.modelValue)
);

const TapView = () => {
    editMode.value = true;
};

const EditBlur = (event: any) => {
    editMode.value = false;
    contentValue.value = event.detail.value;
};

const handleInput = (event: any) => {
    emits('update:modelValue', event.detail.value);
};
</script>

<template>
    <view class="common_textarea">
        <view v-if="!editMode" class="textarea_dit_content" :class="{ hidden: editMode }" :style="{ height: props?.height, width: props?.width }" @tap="TapView">
            <text v-if="contentValue">{{ contentValue }}</text>
            <view class="login_placeholder" v-else-if="placeholder !== undefined">
                {{ placeholder }}
            </view>
            <view class="login_placeholder textarea_placeholder" v-else-if="placeholder === undefined">
                <image :src="placeholder_icon" class="placeholder_icon" />
                <text>点击输入</text>
            </view>
        </view>
        <textarea
            v-else
            class="textarea_dit_content"
            disable-default-padding
            :class="{ hidden: !editMode }"
            :style="{ height: props?.height, width: props?.width }"
            :value="contentValue"
            :show-confirm-bar="false"
            :maxlength="props?.maxlength"
            :disabled="disabled"
            autofocus
            focus
            @blur="EditBlur"
            @input="handleInput"
            :placeholder="placeholder"
            placeholderClass="login_placeholder"
        />
        <view class="showCount" v-if="showCount">{{ contentValue?.length ?? 0 }}/{{ maxlength ?? 0 }} </view>
    </view>
</template>

<style scoped lang="scss">
@import './index.scss';
</style>
