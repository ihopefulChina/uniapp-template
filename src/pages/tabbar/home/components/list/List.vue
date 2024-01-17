<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:57:24
 * @FilePath: /uniapp_template/src/pages/tabbar/home/components/list/List.vue
 * @Description: 页面 - 列表
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->

<script lang="ts" setup>
import { nextTick, toRefs, watchEffect } from 'vue';
import Empty from '~/components/common/empty/Empty.vue';
import PullToRefresh from '~/components/pullToRefresh/PullToRefresh.vue';
import { useModify } from '~/hooks';
import useMMPullToRefresh from '~/hooks/usePullToRefresh';
import { api } from '~/request';
import { UpWorkOrderWebListVo } from '~/request/data-contracts';
import { debounceOnRefresh } from '~/utils/uniApi';
import Item from './item/Item.vue';

interface IOnShelvesProps {
    /** 关键词 */
    condition?: string;
}
/** 父传子参数 */
const props = defineProps<IOnShelvesProps>();
const { condition } = toRefs(props);

// 列表数据
const pullToProps = useMMPullToRefresh<UpWorkOrderWebListVo>({
    getData: (params) => {
        return api['/wechat/api/upWorkOrder/page_GET']({ condition: condition?.value, ...params });
    },
});
const { list, isEmpty } = toRefs(pullToProps);
/** 详情回列表更新item */
useModify('onShelvesItem', pullToProps?.updateById);

const onRefresh = () => {
    nextTick(() => {
        // 刷新列表
        debounceOnRefresh(() => pullToProps.onRefresh({ clearList: true }));
    });
};

watchEffect(() => {
    if (condition?.value !== undefined) {
        onRefresh();
    }
});
</script>

<template>
    <PullToRefresh
        isTab
        :noMore="pullToProps?.noMore"
        :state="pullToProps?.state"
        :isEmpty="pullToProps?.isEmpty"
        @onRefresh="pullToProps?.onRefresh"
        @onReachBottom="pullToProps?.onReachBottom"
        refresherBackground="#F4F5FA"
    >
        <view class="list" v-if="list && list?.length > 0">
            <view class="item" v-for="item in list" :key="item?.id">
                <Item :item="item" @updateById="pullToProps?.updateById" />
            </view>
        </view>

        <view class="empty" v-else-if="condition === undefined && isEmpty">
            <Empty marginTop="220" emptyStr="暂无数据" />
        </view>
        <view class="empty" v-else-if="condition !== undefined && isEmpty">
            <Empty marginTop="220" emptyStr="搜索无结果" />
        </view>
    </PullToRefresh>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
