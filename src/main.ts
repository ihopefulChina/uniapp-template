/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 09:36:34
 * @FilePath: /uniapp_template/src/main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { createSSRApp } from 'vue';
import { initRequest } from '~/components/request/utils';
import { setupStore } from '~/state';
import App from './App.vue';

export function createApp() {
    const app = createSSRApp(App);

    initRequest();
    setupStore(app);

    return {
        app,
    };
}
