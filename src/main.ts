/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2023-09-12 18:04:41
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2023-11-23 12:38:07
 * @FilePath: /uniapp_template/src/main.ts
 * @Description:
 *
 * Copyright (c) 2023 by 784667332@qq.com, All Rights Reserved.
 */
import { createSSRApp } from 'vue';
import App from './App.vue';

import { setupStore } from '~/state';
import { initRequest } from './components/request/utils';
import i18n from './locale';

export function createApp() {
    const app = createSSRApp(App);

    initRequest();
    setupStore(app);
    app.use(i18n);

    return {
        app,
    };
}
