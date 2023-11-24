<script lang="ts">
/**
 * 步进器
 * @description 可以根据所需要的步骤进行增加和减少。
 */
export default { name: 'Stepper' };
</script>
<script lang="ts" setup>
import { computed, Ref, ref, nextTick, watch } from 'vue';

const props = defineProps({
    disabled: {
        type: Boolean,
        default: false,
    },
    //禁用输入功能
    disabledInput: {
        type: [Boolean],
        default: false,
    },

    // 步幅，默认1
    step: {
        type: Number,
        default: 1,
    },
    //固定小数点位数，0表示整数
    fixed: {
        type: Number,
        default: 0,
    },
    max: {
        type: [Number],
        default: 999,
    },
    min: {
        type: [Number],
        default: 0,
    },
    //按钮增加或者 减少前执行，返回 fase取消当前操作。
    beforeEnter: {
        type: [Function, Boolean],
        default: true,
    },
    modelValue: {
        type: Number,
        default: null,
    },
    defaultValue: {
        type: Number,
        default: null,
    },
});
const emits = defineEmits(['update:modelValue', 'change']);
const setVal: Ref<number> = ref(props.defaultValue ?? '1');

let timeid: any = NaN;

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
    let v = '';
    for (let i = 0; i < len - 1; i++) {
        v += '0';
    }
    return v;
}
async function setStep(ty: string) {
    if (props.disabled) return;
    if (typeof props.beforeEnter === 'function') {
        let p = await props.beforeEnter(ty);
        if (typeof p === 'function') {
            p = await p(ty);
        }
        if (!p) return false;
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
        val = parseInt(val);
        if (ty === '+') {
            val += props.step;
            console.log(val, '+++');
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
    nextTick(function () {
        const realVal = val;
        setVal.value = Number(realVal ? realVal : 0);
        let valss: any = isNaN(setVal.value) || typeof setVal.value === 'undefined' ? '' : setVal.value;
        emits('update:modelValue', valss);
        emits('change', valss);
    });
    return;
}

function inputVal(e: any) {
    setVal.value = e.detail.value;
    console.log(e.detail.value);
    let val = parseFloat(e.detail.value ? e.detail.value : 0);
    nextTick(() => {
        jianchData(forMart(val));
    });
    // clearTimeout(timeid2);
    // timeid2 = setTimeout(function () {
    //     jianchData(forMart(val));
    // }, 150);
}

function jianchData(val: number) {
    if (props.fixed > 0) {
        val = Number(val.toFixed(props.fixed));
        if (isNaN(val) || !val) {
            val = Number('0.' + strWidth(props.fixed) + props.step);
        }
    } else if (props.fixed === 0) {
        val = Number(val.toFixed(0));
    }
    if (val < props.min && val !== 0) {
        val = Number(props.min);
    }
    if (val > props.max && val !== 0) {
        val = Number(props.max);
    }
    console.log(setVal.value, val, '===ddd1');
    if (!setVal.value || setVal.value === 0) {
        // @ts-ignore
        setVal.value = '';
    } else {
        // @ts-ignore
        setVal.value = String(val);
    }
    console.log(setVal.value);
    if (val !== 0) {
        emits('update:modelValue', val);
        emits('change', val);
    }
}

function forMart(val: string | number): number {
    let v = Number(val);
    if (isNaN(v)) {
        return props.min;
    }
    return v;
}
</script>

<template>
    <view class="flex flex-row" @click.stop>
        <view text class="flex flex-row">
            <view class="common_payment_minus" :class="['overflow', props.disabled || isJianDisabled ? 'opacity-5' : '']" @click.stop="setStep('-')">
                <image src="./images/icon_step_reduce.png" mode=""></image>
            </view>

            <input class="common_payment_input" @blur="onBlur" :disabled="props.disabledInput || props.disabled" @input="inputVal" v-model="setVal" auto-blur type="number" />

            <view class="common_payment_plus" :class="['overflow', props.disabled || isAddDisabled ? 'opacity-5' : '']" @click.stop="setStep('+')">
                <image src="./images/icon_step_plus.png" mode=""></image>
            </view>
        </view>
    </view>
</template>
<style lang="scss" scoped>
.common_payment_input {
    width: 40rpx;
    font-size: 30rpx;
    font-weight: 600;
    color: #2a2827;
    line-height: 42rpx;
    text-align: center;
}
.common_payment_minus {
    padding-right: 20rpx;
    border-radius: 30rpx 30rpx 0 0;
}

.common_payment_plus {
    padding-left: 20rpx;
    border-radius: 0 0 30rpx 30rpx;
}
.common_payment_minus,
.common_payment_plus {
    image {
        width: 24rpx;
        height: 24rpx;
    }
}
</style>
