<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-19 17:41:49
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-10 09:58:58
 * @FilePath: /LX001413-weiyunbao-app/src/pages/template/components/item/Item.vue
 * @Description:  组件 - item
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
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
