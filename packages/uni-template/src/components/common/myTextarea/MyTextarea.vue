<script lang="ts" setup>
import { ref, watch } from 'vue';

import placeholder_icon from './images/placeholder_icon.png';

interface ITextareaProps {
  /** 是否禁用 */
  disabled?: boolean;
  /** value */
  modelValue?: string;
  /**  maxlength */
  maxlength?: number;
  /** placeholder */
  placeholder?: string;
  /** width */
  width: string | number;
  /** height */
  height: string | number;
  /** 显示统计 */
  showCount?: boolean;
}

const props = defineProps<ITextareaProps>();

const emits = defineEmits<{
  (e: 'update:modelValue', data?: string): void;
}>();

const contentValue = ref<string | undefined>(props?.modelValue);
const editMode = ref<boolean>(false);

watch(
  () => props.modelValue,
  () => (contentValue.value = props.modelValue)
);

const TapView = () => {
  editMode.value = true;
};

const EditBlur = (event: any) => {
  editMode.value = false;
  contentValue.value = event.detail.value;
};

const handleInput = (event: any) => {
  emits('update:modelValue', event.detail.value);
};
</script>

<template>
  <view class="common_textarea">
    <view v-if="!editMode" class="textarea_dit_content" :class="{ hidden: editMode }" :style="{ height: props?.height, width: props?.width }" @tap="TapView">
      <text v-if="contentValue">
        {{ contentValue }}
      </text>
      <view v-else-if="placeholder !== undefined" class="login_placeholder">
        {{ placeholder }}
      </view>
      <view v-else-if="placeholder === undefined" class="login_placeholder textarea_placeholder">
        <image :src="placeholder_icon" class="placeholder_icon" />
        <text>点击输入</text>
      </view>
    </view>
    <textarea
      v-else
      class="textarea_dit_content"
      disable-default-padding
      :class="{ hidden: !editMode }"
      :style="{ height: props?.height, width: props?.width }"
      :value="contentValue"
      :show-confirm-bar="false"
      :maxlength="props?.maxlength"
      :disabled="disabled"
      autofocus
      focus
      :placeholder="placeholder"
      placeholderClass="login_placeholder"
      @blur="EditBlur"
      @input="handleInput"
    />
    <view v-if="showCount" class="showCount">
      {{ contentValue?.length ?? 0 }}/{{ maxlength ?? 0 }}
    </view>
  </view>
</template>

<style scoped lang="scss">
@use './index.scss' as *;
</style>
