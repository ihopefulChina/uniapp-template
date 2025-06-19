<script setup lang="ts">
import { useBaseUrlStore } from './state/useBaseUrlStore';
import { initRequest } from '~/components/request/utils';
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
