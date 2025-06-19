<script setup lang="ts">
import { ref } from 'vue';
import { UpWorkOrderWebListVo } from '~/request/data-contracts';

interface IDetailProps {
    detail?: UpWorkOrderWebListVo;
}
/** 子传父事件 */
const emits = defineEmits<{
    (e: 'onChange', data?: UpWorkOrderWebListVo): void;
}>();
/** 父传子参数 */
const props = defineProps<IDetailProps>();

const total = ref<number>(0);
/** 点击事件 */
const handleClick = () => {
    total.value += 1;
    emits('onChange', props?.detail);
};

/** 传递给父 */
defineExpose({
    getValues: () => {
        return {
            total: total.value,
        };
    },
});
</script>
<template>
    <view class="wc_notice_item" @click="handleClick"> 111111 </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
