/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-04 18:13:10
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:38:18
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

export const urls = [
    // { text: '生产环境', value: 'https://baidu.com' }, // 正式地址放第一个
    { text: '测试环境', value: 'https://github.com' },
];

/** 登录地址 */
export const loginUrl = routeNames.pagesLoginIndex;

/** 静默授权 */
export const silentAuthorization = false;

/** 静默授权接口地址 */
export const silentAuthorizationUrl = '/wechat/auth/imperceptionToken';

/** 是否国际化 */
export const isI18n = true;
export const languages = ['en', 'zh-Hans'];
