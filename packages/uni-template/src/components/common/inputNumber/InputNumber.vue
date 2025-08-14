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
  /** 数值精度  默认2 */
  precision?: 0 | 1 | 2;
  /** placeholderStyle */
  placeholderStyle?: CSSProperties;
  /** 样式 */
  style?: CSSProperties;
}

const props = withDefaults(defineProps<InputNumberProps>(), {
  precision: 2,
  modelValue: undefined,
  defaultValue: undefined,
  disabled: false,
  placeholder: undefined,
  placeholderStyle: undefined,
  style: undefined
});
const emits = defineEmits<{
  (e: 'update:modelValue', data?: string | number): void;
  (e: 'blur', event?: any): void;
}>();
const inputValue = ref<number | undefined>(props.defaultValue ?? undefined);
const oldValue = ref<number | undefined>(props.defaultValue ?? undefined);

const getValue = (val: string | number) => {
let  nVal = Number(val);
  if (nVal < Number(props?.min)) {
    nVal = props?.min;
  } else if (nVal > Number(props?.max)) {
    nVal = props?.max;
  }
  return nVal;
};

const blur = (event: any) => {
  let value = event.detail.value;
  if (value && !isNaN(Number(value))) {
    // eslint-disable-next-line no-implicit-coercion
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
  getValue: () => inputValue.value
});
</script>

<template>
  <input
    v-model="inputValue"
    :disabled="props.disabled"
    class="common_input"
    :placeholder="props?.placeholder"
    :placeholderStyle="props?.placeholderStyle ?? 'color: #A3B3CC'"
    type="digit"
    :style="props?.style"
    :class="{ disabled: props.disabled }"
    @blur="blur"
  >
</template>
<style lang="scss" scoped>
@use './index.scss' as *;
</style>
