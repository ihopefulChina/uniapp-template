/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:13:10
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:21:28
 * @FilePath: /uniapp_template/src/config.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { routeNames } from './routes';

/** 开发环境 */
export const isDev = process.env.NODE_ENV === 'development';
/** 是否是matser 分支 */
// export const isMatserBranch = process.env?.['BRANCH'] !== 'master';
/** 是否是 P2 */
export const isP2 = process.env?.['BRANCH'] !== 'master';

export const CUSTOM_ENVIRONMENT_TEXT = '自定义环境';

export const urls = [
    // { text: '生产环境', value: 'https://knowledgesharing.ecpsrplus.com' }, // 正式地址放第一个
    { text: '测试环境（家鹏）', value: 'https://yanjiapeng-weiyunbao.f.wmeimob.com/' },
    { text: '测试环境（志文）', value: 'https://zhiwen-weiyunbao.f.wmeimob.com/' },
    { text: CUSTOM_ENVIRONMENT_TEXT, value: undefined },
];

/** 登录地址 */
export const loginUrl = routeNames.pagesLoginIndex;

/** 静默授权 */
export const silentAuthorization = false;

/** 静默授权接口地址 */
export const silentAuthorizationUrl = '/wechat/auth/imperceptionToken';
