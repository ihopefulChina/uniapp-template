<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-11-20 11:09:04
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-22 09:41:32
 * @FilePath: /uniapp_template/src/uni_modules/tuniaoui-vue3/components/count-scroll/src/count-scroll.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts" setup>
import { countScrollProps } from './count-scroll';
import { useCountScroll, useCountScrollCustomStyle } from './composables';

const props = defineProps(countScrollProps);

const { ns, countScrollClass, countScrollStyle, countScrollColumnStyle } = useCountScrollCustomStyle(props);
const { columns, activeIndex } = useCountScroll(props);
</script>

<template>
    <view :class="[countScrollClass]" :style="countScrollStyle">
        <view :class="[ns.e('wrapper')]">
            <view v-for="(item, index) in columns" :key="index" :class="[ns.e('column')]" :style="countScrollColumnStyle(activeIndex?.[index]!)">
                <view v-for="(listItem, listIndex) in item" :key="listIndex" :class="[ns.em('column', 'item')]">
                    {{ listItem }}
                </view>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
@import '../../../theme-chalk/src/count-scroll.scss';
</style>
