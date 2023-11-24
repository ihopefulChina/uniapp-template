/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-10-11 12:21:45
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-10-11 12:21:49
 *  * @FilePath: /uniapp_template/src/utils/upload/config.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
export interface IUplodaOptions {
    /**
     * 自定义上传文件名称
     * 上传文件列表中的每个文件都会调用此方法。可以自定义上传文件的格式名称
     * @description 有时候你需要对上传文件的名称、路径做一些额外的增强处理（添加目录路径、添加修改文件名称等）
     * @example (fileName) => `temp/admin/${fileName}-${Date.now()}`
     */
    setFileName?: (fileName: string) => string;
}
