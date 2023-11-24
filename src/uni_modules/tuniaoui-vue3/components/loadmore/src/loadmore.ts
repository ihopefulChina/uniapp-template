/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-11-20 11:09:04
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-22 12:21:45
 * @FilePath: /uniapp_template/src/uni_modules/tuniaoui-vue3/components/loadmore/src/loadmore.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { buildProps, definePropType } from '../../../utils';
import { loadingModes } from '../../loading';
import i18n from '~/locale';
import type { ExtractPropTypes } from 'vue';

export const loadmoreStatus = ['loadmore', 'loading', 'nomore', 'empty'] as const;

export type LoadmoreText = {
    loadmore?: string;
    loading?: string;
    nomore?: string;
    empty?: string;
};

export const loadmoreProps = buildProps({
    /**
     * @description 加载状态
     */
    status: {
        type: String,
        values: loadmoreStatus,
        default: 'loadmore',
    },
    /**
     * @description 尺寸大小，支持`sm`, `md`, `lg` 以及传入指定的尺寸大小
     */
    size: String,
    /**
     * @description 颜色，以tn开头将使用图鸟内置的颜色
     */
    color: String,
    /**
     * @description 加载文案
     */
    text: {
        type: definePropType<LoadmoreText>(Object),
        default: () => ({
            loadmore: i18n.global.t('common.loadmore'),
            loading: i18n.global.t('common.loading'),
            nomore: i18n.global.t('common.nomore'),
            empty: i18n.global.t('common.no_data'),
        }),
    },
    /**
     * @description 是否显示加载图标
     */
    loadingIcon: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 加载图标类型
     */
    loadingIconMode: {
        type: String,
        values: loadingModes,
        default: 'circle',
    },
    /**
     * @description 是否显示加载文案，如果不显示，在加载状态下，只显示加载图标，在加载完成状态下，不显示任何内容，在没有数据时显示一个点
     */
    loadingText: {
        type: Boolean,
        default: true,
    },
});

export const loadmoreEmits = {
    /**
     * @description 点击事件
     */
    click: () => true,
};

export type LoadmoreProps = ExtractPropTypes<typeof loadmoreProps>;
export type LoadmoreEmits = typeof loadmoreEmits;

export type LoadmoreStatus = (typeof loadmoreStatus)[number];
