<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-13 18:40:46
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:24:32
 * @FilePath: /uniapp_template/src/pages/common/notFound/index.vue
 * @Description: 页面 - 404
-->
<script lang="ts" setup>
import Empty from '~/components/common/empty/Empty.vue';
import { useMyRoute } from '~/hooks';
import { MMNavigationType } from '~/layout/navigation/const';
import Navigation from '~/layout/navigation/Navigation.vue';
import PageContainer from '~/layout/pageContainer/PageContainer.vue';

const { replace } = useMyRoute();

/**
 * 返回首页
 */
const backHome = () => {
    replace('pagesTabbarHomeIndex');
};
</script>

<template>
    <PageContainer>
        <Navigation title="Not Found" :type="MMNavigationType.Transparent" />
        <Empty :marginTop="240" emptyStr="页面找不到了">
            <template #bottom>
                <view class="publicButton">
                    <button class="backToHomePage btn default ht80" @click="backHome">返回首页</button>
                </view>
            </template>
        </Empty>
    </PageContainer>
</template>

<style lang="scss" scoped>
@import './index.scss';
</style>
