/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-11-20 11:09:04
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-22 12:20:41
 * @FilePath: /uniapp_template/src/uni_modules/tuniaoui-vue3/components/base/common-props/picker/index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { buildProps } from '../../../../utils';
import { ZIndex } from '../../../../constants';
import i18n from '~/locale';

export const pickerBaseProps = buildProps({
    /**
     * @description 显示取消按钮
     */
    showCancel: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 取消按钮的文本
     */
    cancelText: {
        type: String,
        default: i18n.global.t('common.cancel'),
    },
    /**
     * @description 取消按钮的字体颜色，支持图鸟内置的字体颜色
     */
    cancelColor: String,
    /**
     * @description 显示确定按钮
     */
    showConfirm: {
        type: Boolean,
        default: true,
    },
    /**
     * @description 确定按钮的文本
     */
    confirmText: {
        type: String,
        default: i18n.global.t('common.ok'),
    },
    /**
     * @description 确定按钮的字体颜色，支持图鸟内置的字体颜色
     */
    confirmColor: String,
    /**
     * @description 显示遮罩
     */
    mask: Boolean,
    /**
     * zIndex
     */
    zIndex: {
        type: Number,
        default: ZIndex.popup,
    },
} as const);
