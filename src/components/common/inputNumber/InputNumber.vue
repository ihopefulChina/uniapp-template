<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-19 15:16:46
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:13:49
 * @FilePath: /uniapp_template/src/components/common/inputNumber/InputNumber.vue
 * @Description: 组件 - 数字输入
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts" setup>
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
    /** placeholderStyle */
    placeholderStyle?: CSSProperties;
    /** 样式 */
    style?: CSSProperties;
}

const props = withDefaults(defineProps<InputNumberProps>(), {
    precision: 2,
});
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
            value = (value ?? '')?.toFixed(props?.precision);
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
        :placeholderStyle="props?.placeholderStyle ?? 'color: #A3B3CC'"
        type="digit"
        :style="props?.style"
        :class="{ disabled: props.disabled }"
    />
</template>
<style lang="scss" scoped>
@import './index.scss';
</style>
