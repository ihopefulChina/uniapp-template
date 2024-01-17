<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-19 17:41:49
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:53:26
 * @FilePath: /uniapp_template/src/pages/tabbar/home/components/list/item/Item.vue
 * @Description:  组件 -  item
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import dayjs from 'dayjs';
import { useMutate, useMyRoute } from '~/hooks';
import { api } from '~/request';
import { UpWorkOrderWebListVo } from '~/request/data-contracts';
interface IProjectItemProps {
    /** item数据 */
    item?: UpWorkOrderWebListVo;
}

const props = defineProps<IProjectItemProps>();

const emits = defineEmits<{
    (e: 'updateById', data?: UpWorkOrderWebListVo): void;
}>();

const { navigate } = useMyRoute();

const { mutate } = useMutate({
    initRequest: false,
    getData: () => api['/wechat/api/upWorkOrder/{id}_GET'](props?.item?.id as number),
    successCallback: async (value) => {
        /* 列表更新数据 */
        emits('updateById', { ...value?.upWorkOrderInfo, ...value?.serverRoomInfo, ...value?.customerInfo } as UpWorkOrderWebListVo);
    },
});

const jumpDetail = () => {
    mutate();
    navigate('pagesLoginIndex', { id: props?.item?.id || '' });
};
</script>
<template>
    <view class="wc_project_item" @click="jumpDetail">
        <view class="status_time"> {{ props?.item?.gmtCreated ? dayjs(props?.item?.gmtCreated).format('YYYY.MM.DD') : '-' }}</view>
    </view>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
