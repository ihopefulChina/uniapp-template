<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-12-06 13:59:16
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:09:34
 * @FilePath: /uniapp_template/src/components/common/ellipsis/Ellipsis.vue
 * @Description: 组件 - 省略
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script setup lang="ts">
import { CSSProperties, computed, getCurrentInstance, ref, watchEffect } from 'vue';
import { selectRect } from '~/utils/uniApi';

interface IEllipsisProps {
    /**
     * key
     *
     * */
    keyValue: string;
    /**
     * 文本内容
     */
    text?: string;

    /**
     * 最大显示行数
     * @default 2
     */
    lines?: number;
    /**
     * 展开按钮文本
     */
    expandText?: string;
    /**
     * 收起按钮文本
     */
    collapseText?: string;
}

const props = withDefaults(defineProps<IEllipsisProps>(), {
    lines: 2,
    collapseText: '收起',
    expandText: '展开',
});
const instance = getCurrentInstance(); // 获取组件实例

const expand = ref(false);

const emits = defineEmits<{
    (e: 'change', data: boolean): void;
}>();

/** 最大行数 */
const maxLines = computed(() => (expand.value ? 'inherit' : props.lines));
/** 最大高度 */
const maxHeight = computed(() => (props?.lines ?? 0) * 18);
/** 是否显示展开收起按钮 */
const action = ref(false);
watchEffect(async () => {
    if (props?.text !== undefined && props?.keyValue !== undefined) {
        nextTick(async () => {
            const rectInfo = await selectRect(`.ellipsis_${props?.keyValue}`, instance!);
            console.log(rectInfo, '1111');
            action.value = (rectInfo?.height ?? 0) > maxHeight.value;
        });
    }
});

// 样式变化
const acitonStyle = computed<CSSProperties>(() => {
    return {
        display: expand.value ? 'inline' : 'block',
        position: expand.value ? 'static' : 'absolute',
        paddingLeft: expand.value ? '10rpx' : '10rpx',
    };
});

const handleChange = () => {
    expand.value = !expand.value;
    emits('change', expand.value);
};
</script>

<template>
    <view class="ellipsis" :class="[expand ? 'ellipsis_expand' : '']" @click="handleChange">
        <text class="ellipsis_text_all" :class="`ellipsis_${props?.keyValue}`">
            {{ props?.text ?? '-' }}
        </text>

        <view class="ellipsis_text_overflow">
            {{ props?.text ?? '-' }}
        </view>
        <view v-if="action" class="ellipsis_action" :style="acitonStyle">
            <text class="ellipsis_action_block" v-if="!expand"> ... </text>
            <text class="ellipsis_action_text"> {{ expand ? props?.collapseText : props?.expandText }}</text>
        </view>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';

.ellipsis_text_overflow {
    width: 100%;
    word-break: break-all;
    text-overflow: -o-ellipsis-lastline;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    /* autoprefixer: ignore next */
    -webkit-box-orient: vertical;

    -webkit-line-clamp: v-bind(maxLines);
    position: relative;
}
</style>
