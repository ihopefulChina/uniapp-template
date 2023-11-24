<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-27 16:56:40
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:27:26
 * @FilePath: /uniapp_template/src/components/common/textarea/index.vue
 * @Description: 组件 -  文本域（uniapp 有bug，层级高，）
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'MyTextarea' };
</script>

<script lang="ts" setup>
import { ref, watch } from 'vue';

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
    // contentValue.value = props?.maxlength ? event.detail.value?.slice(0, props?.maxlength) : event.detail.value || '';
    // useUpdate();
};

const handleInput = (event: any) => {
    emits('update:modelValue', event.detail.value);
};
</script>

<template>
    <view class="common_textarea">
        <view v-if="!editMode" class="textarea_dit_ontent" :class="{ hidden: editMode }" :style="{ height: props?.height, width: props?.width }" @tap="TapView">
            <text v-if="contentValue">{{ contentValue }}</text>
            <view class="textarea_dit_placeholder" v-else>
                {{ placeholder }}
            </view>
        </view>
        <textarea
            v-else
            class="textarea_dit_ontent"
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
        />
        <view class="showCount" v-if="showCount">{{ contentValue?.length ?? 0 }}/{{ maxlength ?? 0 }} </view>
    </view>
</template>

<style scoped lang="scss">
.common_textarea {
    position: relative;
}
.textarea_dit_ontent {
    white-space: pre-wrap;
    text-align: justify;
    text-justify: inter-ideograph;
    overflow-y: scroll;
}

.textarea_dit_placeholder {
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #abaaa8;
    line-height: 40rpx;
}
.hidden {
    display: none;
}
.showCount {
    z-index: 1;
    position: absolute;
    bottom: -6rpx;
    right: 0;
    font-size: 24rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #7f7e7d;
    line-height: 34rpx;
}
</style>
