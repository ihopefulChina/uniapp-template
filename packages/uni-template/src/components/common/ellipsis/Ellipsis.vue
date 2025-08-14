<script setup lang="ts">
import { CSSProperties, computed, getCurrentInstance, nextTick, ref, watchEffect } from 'vue';
import { selectRect } from '~/utils/uniApi';

interface IEllipsisProps {
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
  /**
   * key
   *
   * */
  keyValue: string;
}

const props = withDefaults(defineProps<IEllipsisProps>(), {
  lines: 2,
  text: '',
  collapseText: '收起',
  expandText: '展开'
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
      action.value = (rectInfo?.height ?? 0) > maxHeight.value;
    });
  }
});

// 样式变化
const acitonStyle = computed<CSSProperties>(() => {
  return {
    display: expand.value ? 'inline' : 'block',
    position: expand.value ? 'static' : 'absolute',
    paddingLeft: expand.value ? '5px' : '5px'
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
      <text v-if="!expand" class="ellipsis_action_block">
        ...
      </text>
      <text class="ellipsis_action_text">
        {{ expand ? props?.collapseText : props?.expandText }}
      </text>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;

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
