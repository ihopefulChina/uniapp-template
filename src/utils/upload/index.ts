/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-25 18:05:42
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-24 09:21:23
 * @FilePath: /uniapp_template/src/utils/upload/index.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { api } from '~/request';
import AliYunUni from './upload';

const { upload, uploadFile } = new AliYunUni({
    getOssToken: () => api['/wechat/api/oss/info_GET'](),
});

export { upload, uploadFile };
