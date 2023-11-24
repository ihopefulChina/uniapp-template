/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-20 10:57:48
 * @FilePath: /uniapp_template/src/components/empty/prpos.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

export const EmptyProps = {
    marginTop: {
        type: [String, Number],
        default: 100,
    },
    iconPath: {
        type: String,
        default: './images/icon_empty.png',
    },
    emptyStr: {
        type: String,
        default: '',
    },
    width: {
        type: [String, Number],
        default: 360,
    },
    height: {
        type: [String, Number],
        default: 320,
    },
    tips: {
        type: String,
        default: '',
    },
};
