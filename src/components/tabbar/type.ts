/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-11-20 16:02:15
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-21 10:44:05
 * @FilePath: /uniapp_template/src/components/tabbar/type.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
export interface ITabBarData {
    /** 图标 */
    image: string;

    /** 选中时候的样式 */
    imageSelected: string;

    /** i18 key 值 */
    key?: string;
    /** 文字 */
    text?: string;

    /** 跳转连接 */
    url: string;

    /** 红点 */
    redHot?: boolean;

    /** 未读数 */
    count?: number;
}
