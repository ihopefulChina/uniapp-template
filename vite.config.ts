/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-11-23 14:09:32
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 15:53:19
 * @FilePath: /uniapp_template/vite.config.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { UserConfig } from 'vite';
import { resolve } from 'path';
import uni from '@dcloudio/vite-plugin-uni';
import autoRoute from './plugins/autoRoute.js';

export default (): UserConfig => {
    return {
        base: './',
        // 设置路径别名
        resolve: {
            alias: {
                '~': resolve('./src'),
                '@': resolve('./src'),
            },
            extensions: ['.js', '.json', '.ts', '.vue'], // 使用路径别名时想要省略的后缀名，可以自己 增减
        },
        // 自定义全局变量
        define: {
            // 'process.env': {
            //     BRANCH: gitRevisionPlugin?.branch(),
            // },
        },
        // 构建配置
        build: {
            rollupOptions: {
                onLog: (__, log, ____) => {
                    if (log?.code === 'EMPTY_BUNDLE') {
                        return;
                    }
                },
            },
        },
        // 插件
        plugins: [uni(), autoRoute({ autoRoute: true })],
    };
};
