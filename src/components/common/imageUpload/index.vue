<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-08-31 09:18:37
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:29:35
 * @FilePath: /uniapp_template/src/components/common/imageUpload/index.vue
 * @Description: 组件 - 上传图片
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script lang="ts">
export default { name: 'ImageUpload' };
</script>
<script lang="ts" setup>
import { ref, watch } from 'vue';
import { useLocale } from '~/hooks';
import { beforeChooseImage, noCameraPermission } from '~/js_sdk/wa-permission/permission';
import { getResizeUrl, isImage } from '~/utils/aliyun';
import { upload } from '~/utils/upload';

export interface IDetailProps {
    /** 最大上传数量 */
    maxCount?: number;
    modelValue?: string[];
}

/** 父传子参数 */
const props = defineProps<IDetailProps>();
const emits = defineEmits<{
    (e: 'update:modelValue', data?: string[]): void;
}>();
const { t } = useLocale();
// 图片 列表
const list = ref<string[]>([]); // 已上传列表

/** 保存文件列表 */
const setList = (newList: string[]) => {
    console.log(newList, 'newList');
    list.value = newList;
};

/**上传图片 */
const execFile = async (list_tmp: string[]) => {
    let newList: string[] = list_tmp;

    const verificat = list_tmp.every((it) => isImage(it));

    if (!verificat) {
        uni.showToast({
            title: t('common.upload_photo_error'),
            icon: 'none',
        });
        return;
    }
    console.log(list_tmp, 'list_tmplist_tmplist_tmplist_tmp');
    // 判断已上传文件是否小于最大可传文件数，大则截取
    if (list.value?.length + newList?.length > (props?.maxCount || 1)) {
        const max_len = list.value.length - newList.length;
        newList = newList.slice(0, max_len - 1);
    }
    // 上传文件
    if (newList?.length > 0) {
        try {
            uni.showLoading({ title: t('common.uploading'), mask: true });
            const uploadList = await upload(newList);
            setList([...list.value, ...uploadList]);
            uni.hideLoading();
        } catch (e) {
            uni.showToast({
                title: t('common.upload_fail'),
                icon: 'none',
            });
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
        },
    });
};

/** 预览 */
const handlePreview = (url: string) => {
    if (url) {
        // 预览PDF文件
        uni.previewImage({
            urls: list?.value,
            current: url,
        });
    }
};

/** 删除 */
const del = (index: number) => {
    list.value = list.value.filter((__, i) => i !== index);
    // uni.showModal({
    //     title: '确认删除该文件？',
    //     cancelText: '我再想想',
    //     cancelColor: '#2A2827',
    //     confirmText: '确认删除',
    //     confirmColor: '#FA9240',
    //     success: async (res) => {
    //         if (res?.confirm) {
    //             list.value = list.value.filter((__, i) => i !== index);
    //         }
    //     },
    // });
};

defineExpose({
    getValues: () => ({ list: list?.value }),
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
        <view class="common_uploadImages_item" v-for="(item, index) in list" :key="item" @click.stop="handlePreview(item)">
            <image :src="item + getResizeUrl({ width: 160, height: 160 })" class="common_uploadImages_item_image" />

            <image src="./images/icon_postsale_upload_close.png" class="icon_postsale_upload_close" @click.stop="del(index)" />
        </view>

        <view class="common_uploadImages_item" @click="beforeChooseImage(() => chooseImage())" v-if="list?.length < (props?.maxCount || 1)">
            <image src="./images/icon_upload.png" class="icon_upload_image" />
            <view class="common_upload_tips">
                <text>{{ t('common.upload_picture') }}</text>

                <text>({{ t('common.up_to_number', { max: props?.maxCount ?? 1 }) }} {{ props?.maxCount ?? 1 }}{{ t('common.upload_file_draw') }})</text>
            </view>
        </view>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
