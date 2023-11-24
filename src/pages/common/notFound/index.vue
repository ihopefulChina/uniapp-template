<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-13 18:40:46
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:32:16
 * @FilePath: /uniapp_template/src/pages/common/notFound/index.vue
 * @Description: 页面 - 404
-->
<script lang="ts" setup>
import PageContainer from '~/layout/pageContainer/index.vue';
import Navigation from '~/layout/navigation/index.vue';
import Empty from '~/components/common/empty/index.vue';
import { useMyRoute } from '~/hooks';

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
        <Navigation title="Not Found" />
        <Empty :marginTop="240" emptyStr="页面找不到了" :iconPath="'./images/icon_empty.png'">
            <template #bottom>
                <view class="m-auto mt-4">
                    <view class="publicButton">
                        <button class="backToHomePage btn yellowHollow ht80" @click="backHome">返回首页</button>
                    </view>
                </view>
            </template>
        </Empty>
    </PageContainer>
</template>

<style lang="scss" scoped>
.backToHomePage {
    padding: 0 30rpx;
}
</style>
