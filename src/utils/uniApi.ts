/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-17 15:21:25
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 13:15:48
 * @FilePath: /uniapp_template/src/utils/uniApi.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

import { nextTick } from 'vue';
import { isArray, isNumber } from './is';

/**
 * rpx 换算为 px
 * @param upx
 */
export const rpx2px = (upx: number) => {
    return uni.upx2px(upx);
};

/**
 * px 换算为 rpx
 * @param px
 */
export const px2rpx = (px: number) => {
    return px / (uni.upx2px(100) / 100);
};

/** 解决存在tab 快速切换，导致数据没有及时更新 */
export const debounceOnRefresh = (fn: Function) => {
    try {
        uni.showLoading({ title: '加载中', mask: true });
        nextTick(() => {
            fn();
            uni.pageScrollTo({ scrollTop: 0 });
            setTimeout(() => {
                uni.hideLoading();
            }, 1000);
        });
    } catch (e) {
        uni.hideLoading();
    }
};

export const selectorQueryClientRect = (selector: string): Promise<UniApp.NodeInfo> =>
    new Promise((resolve) => {
        nextTick(() => {
            const query = uni.createSelectorQuery();
            query
                .select(selector)
                .boundingClientRect((res) => {
                    console.log('res', res);
                    resolve(res as any);
                })
                .exec();
        });
    });

/**
 * 查询元素大小
 *
 * @export
 * @param {string} name
 * @param {*} scope
 * @returns
 */
export function selectRect(name: string, scope: any) {
    return new Promise((resolve) => {
        nextTick(() => {
            const query = uni.createSelectorQuery().in(scope);
            query
                .select(name)
                .boundingClientRect((res) => {
                    resolve(res);
                })
                .exec();
        });
    });
}

export const base64ToBlob = function (code: any) {
    const parts = code.split(';base64,');
    const contentType = parts[0].split(':')[1];
    const raw = window.atob(parts[1]);
    const rawLength = raw.length;
    const uInt8Array = new Uint8Array(rawLength);
    for (let i = 0; i < rawLength; ++i) {
        uInt8Array[i] = raw.charCodeAt(i);
    }
    return new Blob([uInt8Array], {
        type: contentType,
    });
};
// 解析rpx
export function parseRpx(val: any): string {
    return isArray(val) ? val.map(parseRpx).join(' ') : isNumber(val) ? `${val}rpx` : val;
}
