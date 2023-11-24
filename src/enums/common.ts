/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-22 18:37:56
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-10-30 14:53:28
 *  * @FilePath: /uniapp_template/src/enums/common.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

import { converEnmuMap, converEnumArray } from './utils';

/** 支付方式 */
export enum PaymentType {
    /** 微信支付 */
    WXPAY = 'WECHAT',
    /** 余额支付 */
    BALANCE = 'BALANCE',
}

export const PaymentTypeMap = [
    [PaymentType.WXPAY, '微信支付'],
    [PaymentType.BALANCE, '余额支付'],
];

export const MPaymentType = converEnumArray(PaymentTypeMap);
export const OPaymentType = converEnmuMap(PaymentTypeMap);

/** 当前用户登录的端：1.用户端，2.员工端  */
export enum ClientType {
    /** 用户端 */
    Client = 1,
    /** 员工端 */
    Staff = 2,
}
