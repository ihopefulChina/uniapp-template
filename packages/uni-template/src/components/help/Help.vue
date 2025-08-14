<script lang="ts" setup>
import { nextTick, ref } from 'vue';
import { isDev } from '~/config';
import { useToast } from '~/layout/pageContainer/useToast';
import { routeNames } from '~/routes';
import { useGlobalStore } from '~/state/useGlobalStore';
import TnPopup from '~/uni_modules/tuniaoui-vue3/components/popup/src/popup.vue';
import TnSubsectionItem from '~/uni_modules/tuniaoui-vue3/components/subsection/src/subsection-item.vue';
import TnSubsection from '~/uni_modules/tuniaoui-vue3/components/subsection/src/subsection.vue';
import { cleanToken, copyToken } from './tool';

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
const currentTabIndex = ref(0);

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
    <TnPopup v-model="visible" width="590" :radius="20" open-direction="center" bg-color="transparent" @close="close" @open="open">
      <view v-if="visible" class="help_switch_tab">
        <view class="modal_title">
          调试工具🔨
        </view>
        <TnSubsection v-model="currentTabIndex" mode="button" active-color="#497cd8" radius="16">
          <!-- <TnSubsectionItem title="切换环境" /> -->
          <TnSubsectionItem title="切换用户" />
        </TnSubsection>
        <view class="switchTab">
          <view v-if="currentTabIndex === 0" class="help_list">
            <text v-for="item in userList" :key="item?.value" class="help_list_item" @click="changeSwitch(item?.value)">
              {{ item?.text }}
            </text>
          </view>
        </view>
      </view>
    </TnPopup>

    <!-- 修改用户Id -->
    <TnPopup v-model="switchShow" width="590" :radius="20" open-direction="center" @close="switchShow = false" @open="switchShow = true">
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
    </TnPopup>
  </view>
</template>

<style lang="scss" scoped>
@use './index.scss' as *;
</style>
