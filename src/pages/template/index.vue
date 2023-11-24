<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:35:19
 * @FilePath: /uniapp_template/src/pages/template/index.vue
 * @Description: 页面 - 模板
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'MyTemplate' };
</script>

<script lang="ts" setup>
import PageContainer from '~/layout/pageContainer/index.vue';
import Navigation from '~/layout/navigation/index.vue';
import { PackageMainEvaluateDetailVo } from '~/request/data-contracts';
import { ref } from 'vue';

export interface IDetailProps {
    detail?: PackageMainEvaluateDetailVo;
}
/** 子传父事件 */
const emits = defineEmits<{
    (e: 'onChangeCallback', data?: PackageMainEvaluateDetailVo): void;
}>();
/** 父传子参数 */
const props = defineProps<IDetailProps>();

const total = ref<number>(0);
/** 点击事件 */
const handleClick = () => {
    total.value += 1;
    emits('onChangeCallback', { age: 122 });
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
    <PageContainer className="page">
        <Navigation title="xxx" />
        <view @click="handleClick" class="name"> {{ props?.detail?.name || '' }}{{ total }} </view>
    </PageContainer>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
