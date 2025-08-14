<script lang="ts" setup>
import { computed, Ref, ref, nextTick, watch } from 'vue';

const props = defineProps({
  disabled: {
    type: Boolean,
    default: false
  },
  // 禁用输入功能
  disabledInput: {
    type: [Boolean],
    default: false
  },

  // 步幅，默认1
  step: {
    type: Number,
    default: 1
  },
  // 固定小数点位数，0表示整数
  fixed: {
    type: Number,
    default: 0
  },
  max: {
    type: [Number],
    default: 999
  },
  min: {
    type: [Number],
    default: 0
  },
  // 按钮增加或者 减少前执行，返回 fase取消当前操作。
  beforeEnter: {
    type: [Function, Boolean],
    default: true
  },
  modelValue: {
    type: Number,
    default: null
  },
  defaultValue: {
    type: Number,
    default: null
  }
});
const emits = defineEmits(['update:modelValue', 'change']);
const setVal: Ref<number> = ref(props.defaultValue ?? '1');

const timeid: any = NaN;

const isJianDisabled = computed(() => {
  if (setVal.value <= props.min) return true;
  return false;
});

const isAddDisabled = computed(() => {
  if (setVal.value >= props.max) return true;
  return false;
});
watch(
  () => props.modelValue,
  () => {
    if (Number(setVal.value) !== forMart(props.modelValue)) {
      setVal.value = forMart(props.modelValue);
    }
  }
);
const onBlur = () => {
  if (!setVal.value || Number(setVal.value) === 0) {
    // @ts-ignore
    setVal.value = String(props.min);
    emits('update:modelValue', Number(props.min));
    emits('change', Number(props.min));
  }
};

function strWidth(len: number) {
  let val = '';
  for (let idx = 0; idx < len - 1; idx++) {
    val += '0';
  }
  return val;
}
async function setStep(ty: string) {
  if (props.disabled) return;
  if (typeof props.beforeEnter === 'function') {
    let pVal = await props.beforeEnter(ty);
    if (typeof pVal === 'function') {
      pVal = await pVal(ty);
    }
    if (!pVal) return false;
  }
  let val: string | number = forMart(setVal.value);

  if (props.fixed > 0) {
    val = val.toFixed(props.fixed);

    if (!val) {
      val = '0.' + strWidth(props.fixed) + props.step;
    }
    val = Number(val);
    let _setval: string | number = '0.' + strWidth(props.fixed) + props.step;
    _setval = Number(String(_setval));

    if (ty === '+') {
      val += _setval;
      if (val > props.max) {
        val = props.max;
      }
    } else {
      val -= _setval;
      if (val < props.min) {
        val = props.min;
      }
    }
  } else {
    val = val.toFixed(props.fixed);
    // eslint-disable-next-line radix
    val = parseInt(val);
    if (ty === '+') {
      val += props.step;
      if (val > props.max) {
        val = props.max;
      }
    } else {
      val -= props.step;
      if (val < props.min) {
        val = props.min;
      }
    }
  }
  val = Number(Number(val)?.toFixed(props.fixed));
  if (val <= props.min) {
    val = props.min;
    clearInterval(timeid);
  } else if (val >= props.max) {
    val = props.max;
    clearInterval(timeid);
  }
  nextTick(() => {
    const realVal = val;
    setVal.value = Number(realVal ? realVal : 0);
    const valss: any = isNaN(setVal.value) || typeof setVal.value === 'undefined' ? '' : setVal.value;
    emits('update:modelValue', valss);
    emits('change', valss);
  });
  return;
}

function inputVal(event: any) {
  setVal.value = event.detail.value;
  const val = parseFloat(event.detail.value ? event.detail.value : 0);
  nextTick(() => {
    jianchData(forMart(val));
  });
  // clearTimeout(timeid2);
  // timeid2 = setTimeout(function () {
  //     jianchData(forMart(val));
  // }, 150);
}

function jianchData(val: number) {
  let valss = val;
  if (props.fixed > 0) {
    valss = Number(valss.toFixed(props.fixed));
    if (isNaN(valss) || !valss) {
      valss = Number('0.' + strWidth(props.fixed) + props.step);
    }
  } else if (props.fixed === 0) {
    valss = Number(valss.toFixed(0));
  }
  if (valss < props.min && valss !== 0) {
    valss = Number(props.min);
  }
  if (valss > props.max && valss !== 0) {
    valss = Number(props.max);
  }
  if (!setVal.value || setVal.value === 0) {
    // @ts-ignore
    setVal.value = '';
  } else {
    // @ts-ignore
    setVal.value = String(valss);
  }
  if (valss !== 0) {
    emits('update:modelValue', valss);
    emits('change', valss);
  }
}

function forMart(val: string | number): number {
  const newVal = Number(val);
  if (isNaN(newVal)) {
    return props.min;
  }
  return newVal;
}
</script>

<template>
  <view class="flex flex-row" @click.stop>
    <view text class="flex flex-row">
      <view class="common_payment_minus" :class="['overflow', props.disabled || isJianDisabled ? 'opacity-5' : '']" @click.stop="setStep('-')">
        <image src="./images/icon_step_reduce.png" mode="" />
      </view>

      <input v-model="setVal" class="common_payment_input" :disabled="props.disabledInput || props.disabled" auto-blur type="number" @blur="onBlur" @input="inputVal">

      <view class="common_payment_plus" :class="['overflow', props.disabled || isAddDisabled ? 'opacity-5' : '']" @click.stop="setStep('+')">
        <image src="./images/icon_step_plus.png" mode="" />
      </view>
    </view>
  </view>
</template>
<style lang="scss" scoped>
@use './index.scss' as *;
</style>
