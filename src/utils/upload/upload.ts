/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-25 17:55:04
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 18:10:12
 * @FilePath: /uniapp_template/src/utils/upload/upload.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */

import { guid } from '..';
import { autobind, merge } from './decorator';

@autobind
export default class AliYunUni {
    private getOssToken: () => Promise<any>;

    constructor(config: { getOssToken: () => Promise<any> }) {
        this.getOssToken = config.getOssToken;
    }

    /**
     * 上传文件
     *
     * @param {string[]} fileList
     * @returns
     * @memberof AliYun
     */
    async upload(fileList: string[]) {
        if (fileList.length === 0) {
            return [];
        }

        const {
            data: { accessid, signature, policy, dir, host },
        } = await this.getOssTokenMerge();

        return Promise.all(
            fileList.map(
                (file) =>
                    new Promise((resolve) => {
                        if (new RegExp('^' + host).test(file)) {
                            resolve(file);
                            return;
                        }

                        let formKey = '';
                        // if (process.env.TARO_ENV === 'h5') {
                        //   formKey = `${dir}${guid()}`
                        // } else if (process.env.TARO_ENV === 'weapp') {
                        //   formKey = `${dir}${guid()}.${file.substr(
                        //     file.lastIndexOf('.') + 1
                        //   )}`
                        // }

                        formKey = `${dir}${guid()}.${file.substr(file.lastIndexOf('.') + 1)}`;

                        const formData = {
                            // key: "${filename}",
                            signature,
                            OSSAccessKeyId: accessid,
                            policy,
                            key: formKey,
                            success_action_status: 200,
                        };
                        uni.uploadFile({
                            url: host,
                            filePath: file,
                            name: 'file',
                            formData,
                            success() {
                                resolve(`${host}/${formData.key}`);
                            },
                        });
                    })
            )
        ) as Promise<string[]>;
    }

    /**
     * 上传文件
     *
     * @param {{ url: string; name: string }[]} fileList
     * @returns
     * @memberof AliYun
     */
    async uploadFile(fileList: { url: string; name: string }[]) {
        if (fileList.length === 0) {
            return [];
        }

        const {
            data: { accessid, signature, policy, dir, host },
        } = await this.getOssTokenMerge();

        return Promise.all(
            fileList.map(
                (file) =>
                    new Promise((resolve) => {
                        const url = file?.url;
                        if (new RegExp('^' + host).test(url)) {
                            resolve(file);
                            return;
                        }

                        // const formKey = '';
                        // if (process.env.TARO_ENV === 'h5') {
                        //   formKey = `${dir}${guid()}`
                        // } else if (process.env.TARO_ENV === 'weapp') {
                        //   formKey = `${dir}${guid()}.${file.substr(
                        //     file.lastIndexOf('.') + 1
                        //   )}`
                        // }
                        const { name } = file;

                        const suffixIndex = name.lastIndexOf('.');
                        const fileName = name.slice(0, suffixIndex);
                        const extname = name.slice(suffixIndex + 1);

                        let formKey = dir;
                        if (fileName) {
                            formKey += fileName;
                            if (fileName.lastIndexOf('/') !== fileName.length - 1) {
                                formKey += '-';
                            }
                        }
                        formKey += `${guid()}.${extname}`;
                        // formKey = `${dir}${file?.name}-${guid()}.${url.substr(url.lastIndexOf('.') + 1)}`;

                        const formData = {
                            // key: "${filename}",
                            signature,
                            OSSAccessKeyId: accessid,
                            policy,
                            key: formKey,
                            success_action_status: 200,
                        };
                        uni.uploadFile({
                            url: host,
                            filePath: url,
                            name: 'file',
                            formData,
                            success() {
                                resolve(`${host}/${formData.key}`);
                            },
                        });
                    })
            )
        ) as Promise<string[]>;
    }

    @merge()
    private getOssTokenMerge() {
        return this.getOssToken();
    }
}
