/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-01-18 17:18:45
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-12-27 09:26:19
 * @FilePath: /LX001413-weiyunbao-app/src/hooks/useNetworkStatus.ts
 * @Description: 监听网络变化
 *
 * Copyright (c) 2023 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */

import { onLoad } from '@dcloudio/uni-app';
import { onUnmounted, ref } from 'vue';
import { NetworkStatus } from '~/enums/common';

export function useNetworkStatus() {
    const networkType = ref<NetworkStatus>();
    onLoad(() => {
        uni.getNetworkType({
            success: (res) => {
                networkType.value = res.networkType as any;
            },
        });
        uni.onNetworkStatusChange((res: UniApp.OnNetworkStatusChangeSuccess) => {
            networkType.value = res.networkType as any;
        });
    });
    onUnmounted(() => {
        uni.offNetworkStatusChange(() => {});
    });

    return { networkType };
}
