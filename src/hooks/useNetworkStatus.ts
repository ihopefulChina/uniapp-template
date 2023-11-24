/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-01-18 17:18:45
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:03:14
 * @FilePath: /uniapp_template/src/hooks/useNetworkStatus.ts
 * @Description: 监听网络变化
 *
 * Copyright (c) 2023 by huangpengfei 784667332@qq.com, All Rights Reserved.
 */

import { onLoad } from '@dcloudio/uni-app';
import { gotoAppPermissionSetting } from '~/js_sdk/wa-permission/permission';

export function useNetworkStatus() {
    onLoad(() => {
        // #ifdef APP-PLUS
        uni.onNetworkStatusChange((res) => {
            console.log('网络状态发生变化', res);
            if (res?.isConnected) {
                /** 有网络 */
                const pages = getCurrentPages();
                const currentPage = pages[pages.length - 1];
                uni.redirectTo({ url: `/${currentPage?.route}` });
            } else {
                console.log('网络网络网络网络网络', res);
                uni.showModal({
                    title: '网络连接失败',
                    content: '关闭无线数据时，部分功能可能无法使用，请允许应用使用无线数据',
                    confirmColor: '#FA9240',
                    confirmText: '前往设置',
                    success: (res) => {
                        if (res.confirm) {
                            gotoAppPermissionSetting();

                            // plus.runtime.openURL("package:");
                        } else if (res.cancel) {
                            // plus.runtime.openURL('package:');
                            console.log('用户点击取消');
                        }
                    },
                });
            }
        });
        // #endif
    });
    return {};
}
