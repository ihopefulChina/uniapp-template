<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { isDev } from '~/config';
import { useToast } from '~/layout/pageContainer/useToast';
import { routeNames } from '~/routes';
import { useGlobalStore } from '~/state/useGlobalStore';
import WdSegmented from '~/uni_modules/wot-design-uni/components/wd-segmented/wd-segmented.vue';
import { cleanToken, copyToken } from './tool';
import WdPopup from '~/uni_modules/wot-design-uni/components/wd-popup/wd-popup.vue';

const globalStore = useGlobalStore(); // 全局状态
const toastStore = useToast();

/** 打开弹窗 */
const visible = ref(false);
/** 打开 */
const open = () => {
  visible.value = true;
};
const close = () => {
  visible.value = false;
};
// 当前选中的标签索引
const currentTab = ref('切换用户');

/** 切换用户 id */
const useId = ref<string>(uni.getStorageSync('userInfo')?.id || '');
const switchShow = ref<boolean>(false); // 切换用户 id 弹窗
const userList = [
  { text: '切换用户', value: 'switch' },
  { text: '复制 Token', value: 'copy' },
  { text: '清除 Token', value: 'clean' }
];
const changeSwitch = (value: string) => {
  if (value === 'copy') {
    copyToken();
  } else if (value === 'clean') {
    cleanToken();
  } else if (value === 'switch') {
    switchShow.value = true;
  }
  close();
};

/** 切换用户 id */
const changeUseId = async () => {
  // const { data } = await api.get['/api/member/v1/activity/get/{id}']({ id: Number(useId?.value) });
  // uni.setStorageSync('token', data?.token);
  switchShow.value = false;
  nextTick(() => {
    globalStore?.getUserInfo();
  });
  toastStore.showToast({ content: '切换成功', icon: 'success' });
  uni.reLaunch({ url: routeNames.pagesTabbarHomeIndex });
};
</script>

<template>
  <view v-if="isDev">
    <view class="help" @click="open">
      测
    </view>

    <!-- 调试工具 -->
    <WdPopup v-model="visible" @close="close" @open="open">
      <view v-if="visible" class="help_switch_tab">
        <view class="modal_title">
          调试工具🔨
        </view>
        <WdSegmented v-model:value="currentTab" :options="['切换用户']" :vibrateShort="true" />
        <view class="switchTab">
          <view v-if="currentTab === '切换用户'" class="help_list">
            <text v-for="item in userList" :key="item?.value" class="help_list_item" @click="changeSwitch(item?.value)">
              {{ item?.text }}
            </text>
          </view>
        </view>
      </view>
    </WdPopup>

    <!-- 修改用户Id -->
    <WdPopup v-model="switchShow" @close="switchShow = false" @open="switchShow = true">
      <view v-if="switchShow" class="modal_view">
        <text class="modal_title">
          修改用户Id
        </text>
        <view class="input_view">
          <input v-model="useId" class="input" placeholder="请输入Id">
        </view>
        <view class="btn_view">
          <view class="btn cancel_btn" @click="switchShow = false">
            取消
          </view>
          <view class="btn confim_btn" @click="changeUseId">
            确认
          </view>
        </view>
      </view>
    </WdPopup>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
