/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-22 18:37:56
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:18:35
 * @FilePath: /uniapp_template/src/enums/common.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

import { converEnmuMap, converEnumArray } from './utils';

/**   'none' | 'wifi' | '2g' | '3g' | '4g' | '5g' | 'ethernet' | 'unknown' */
export enum NetworkStatus {
    NONE = 'none',
    WIFI = 'wifi',
    Two_G = '2g',
    Three_G = '3g',
    Four_G = '4g',
    Five_G = '5g',
    Ethernet = 'ethernet',
    Unknown = 'unknown',
}

/** 性别 */
export enum Gender {
    /** 男 */
    MALE,
    /** 女 */
    FEMALE,
}

const AGender = [
    [Gender.MALE, '男'],
    [Gender.FEMALE, '女'],
];

export const MGender = converEnumArray(AGender);
export const OGender = converEnmuMap(AGender);
