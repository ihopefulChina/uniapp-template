<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-19 15:16:46
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:33:03
 * @FilePath: /uniapp_template/src/components/common/inputNumber/index.vue
 * @Description: 组件 - 数字输入
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'InputNumber' };
</script>

<script lang="ts" setup>
/**
 * 数字输入
 * @description 数字输入
 */
import { CSSProperties, ref } from 'vue';
import { isNumber } from '~/utils/is';

interface InputNumberProps {
    /** 最大值 */
    max: number;
    /** 最小值 */
    min: number;
    /** value */
    modelValue?: string | number;
    /** 默认值 */
    defaultValue?: number;
    /** 是否禁用 */
    disabled?: boolean;
    /** placeholder */
    placeholder?: string;
    /** 数值精度  默认2*/
    precision?: 0 | 1 | 2;

    placeholderStyle?: CSSProperties;
    style?: CSSProperties;
}

const props = defineProps<InputNumberProps>();
const emits = defineEmits<{
    (e: 'update:modelValue', data?: string | number): void;
    (e: 'blur', event?: any): void;
}>();
const inputValue = ref<number | undefined>(props.defaultValue ?? undefined);
const oldValue = ref<number | undefined>(props.defaultValue ?? undefined);

const getValue = (val: string | number) => {
    val = Number(val);
    if (val < Number(props?.min)) {
        val = props?.min;
    } else if (val > Number(props?.max)) {
        val = props?.max;
    }
    return val;
};

const blur = (event: any) => {
    let value = event.detail.value;
    if (value && !isNaN(Number(value))) {
        if (~value.indexOf('.') && Number.isInteger(Number(value))) {
            value = value.split('.')[0];
        }
        value = getValue(value);
    } else {
        value = oldValue?.value;
    }
    if (isNumber(value)) {
        if (props?.precision === 0) {
            value = Math.round(value);
        } else {
            value = (value ?? '')?.toFixed(props?.precision ?? 2);
        }
    }

    setTimeout(() => {
        event.detail.value = value;
        emits('blur', event);
        emits('update:modelValue', value);
        inputValue.value = value;
    });
};

defineExpose({
    restValue: () => {
        inputValue.value = props.defaultValue ?? undefined;
        oldValue.value = props.defaultValue ?? undefined;
    },
    getValue: () => inputValue.value,
});
</script>

<template>
    <input
        v-model="inputValue"
        :disabled="props.disabled"
        @blur="blur"
        class="common_input"
        :placeholder="props?.placeholder"
        :placeholderStyle="props?.placeholderStyle ?? 'color: #ABAAA8'"
        type="digit"
        :style="props?.style"
        :class="{ disabled: props.disabled }"
    />
</template>
<style lang="scss" scoped>
.common_input {
    font-size: 28rpx;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #2a2827;
    line-height: 40rpx;
}
.disabled {
    opacity: 0.5;
}
</style>
