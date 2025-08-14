<script lang="ts" setup>
import { ref, watch } from 'vue';
import { noCameraPermission } from '~/js_sdk/wa-permission/permission';
import { useToast } from '~/layout/pageContainer/useToast';
import { getResizeUrl, isImage } from '~/utils/aliyun';
import { upload } from '~/utils/upload';

interface IDetailProps {
  /** 最大上传数量 */
  maxCount?: number;
  /** 默认图片 */
  modelValue?: string[];
}

/** 父传子参数 */
const props = defineProps<IDetailProps>();
const emits = defineEmits<{
  (e: 'update:modelValue', data?: string[]): void;
}>();
const toastStore = useToast();
// 图片 列表
const list = ref<string[]>([]); // 已上传列表

/** 保存文件列表 */
const setList = (newList: string[]) => {
  list.value = newList;
};

/** 上传图片 */
const execFile = async (list_tmp: string[]) => {
  let newList: string[] = list_tmp;

  const verificat = list_tmp.every((it) => isImage(it));

  if (!verificat) {
    toastStore.showToast({ content: '上传需要图片格式' });
    return;
  }

  // 判断已上传文件是否小于最大可传文件数，大则截取
  if (list.value?.length + newList?.length > (props?.maxCount || 1)) {
    const max_len = list.value.length - newList.length;
    newList = newList.slice(0, max_len - 1);
  }
  // 上传文件
  if (newList?.length > 0) {
    try {
      uni.showLoading({ title: '上传中', mask: true });
      const uploadList = await upload(newList);
      setList([...list.value, ...uploadList]);
      uni.hideLoading();
    } catch (error) {
      toastStore.showToast({ content: '上传失败' });
      uni.hideLoading();
    }
  }
};

/** 选择图片 */
const chooseImage = async () => {
  uni.chooseImage({
    count: (props?.maxCount || 1)! - list?.value.length,
    success: (res) => {
      res?.tempFilePaths && execFile([...(res?.tempFilePaths as string[])]);
    },
    fail: (res) => {
      if ((res?.code === 11 && res?.errMsg === 'chooseImage:fail No Permission') || (res?.code === 2 && res?.errMsg === 'chooseImage:fail No filming permission')) {
        noCameraPermission();
      }
    }
  });
};

/** 预览 */
const handlePreview = (url: string) => {
  if (url) {
    // 预览PDF文件
    uni.previewImage({
      urls: list?.value,
      current: url
    });
  }
};

/** 删除 */
const del = (index: number) => {
  list.value = list.value.filter((__, idx) => idx !== index);
};

defineExpose({
  getValues: () => ({ list: list?.value })
});

watch(
  () => list.value,
  (val) => {
    emits('update:modelValue', val);
  }
);
</script>

<template>
  <view class="common_uploadImages">
    <view v-for="(item, index) in list" :key="item" class="common_uploadImages_item" @click.stop="handlePreview(item)">
      <image :src="item + getResizeUrl({ width: 160, height: 160 })" class="common_uploadImages_item_image" />

      <image src="./images/icon_postsale_upload_close.png" class="icon_postsale_upload_close" @click.stop="del(index)" />
    </view>

    <view v-if="list?.length < (props?.maxCount || 1)" class="common_uploadImages_item" @click="chooseImage">
      <image src="./images/icon_upload.png" class="icon_upload_image" />
      <view class="common_upload_tips">
        ({{ list.length }}/{{ props.maxCount }})
      </view>
    </view>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
