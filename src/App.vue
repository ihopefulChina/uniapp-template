<!--
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-11-09 12:48:26
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 12:45:28
 * @FilePath: /uniapp_template/src/App.vue
 * @Description: 
 * 
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved. 
-->
<script setup lang="ts">
import { useBaseUrlStore } from './state/useBaseUrlStore';
import { initRequest } from './components/request/utils';
import { isDev } from './config';
import { toRefs, watchEffect } from 'vue';

const baseUrlStore = useBaseUrlStore(); //接口
const { baseUrl } = toRefs(baseUrlStore);

watchEffect(() => {
    initRequest(isDev && baseUrl?.value ? baseUrl?.value : baseUrlStore?.deafultUrl);
});
</script>

<style lang="scss">
@import './uni_modules/tuniaoui-vue3/index.css';
@import './assets/index.scss';
</style>
