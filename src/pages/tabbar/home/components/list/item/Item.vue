<script setup lang="ts">
import dayjs from 'dayjs';
import { useMutate } from '~/hooks';
import { navTo } from '~/hooks/useNavigation';
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
    navTo('pagesLoginIndex', { id: props?.item?.id || '' });
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
