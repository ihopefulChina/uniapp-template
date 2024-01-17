/*
 * @Author: huangpengfei 784667332@qq.com
 * @Date: 2024-01-17 10:06:22
 * @LastEditors: huangpengfei 784667332@qq.com
 * @LastEditTime: 2024-01-17 10:07:38
 * @FilePath: /uniapp_template/plugins/autoRoute.ts
 * @Description: 
 * 
 * Copyright (c) 2024 by 784667332@qq.com, All Rights Reserved. 
 */

/* eslint-disable id-length */
/* eslint-disable @typescript-eslint/no-var-requires */
const chokidar = require('chokidar');
const fs = require('fs');

let watcher;

export const generateRoute = (pagesJson) => {
    const tabBar = (pagesJson?.tabBar ?? [])?.list.map((item) => ({ url: `/${item.pagePath}` }));

    const mainPages = pagesJson?.pages?.map((it) => ({ name: it.name || '', path: it.path }));
    const subPackages = [];
    /** 获取分包的路由 */
    pagesJson?.subPackages
        ?.map((it) => {
            if (it.pages) {
                return it.pages.map((vl) => ({ name: vl.name || '', path: it.root + '/' + vl.path }));
            }
        })
        ?.map((it) => {
            if (it) {
                subPackages.push(...it);
            }
        });
    const pages = [...mainPages, ...subPackages]; // 所有路由
    const tab = '  ';
    let str = `
/**
* 页面路由映射.
* 请不要在此文件添加任何代码。因为生成后会全量覆盖
* 运行 npm run route 或者 yarn route 自动生成
*/
    
export const routeNames = {\n`;

    str += pages
        .map(({ name, path }, index) => {
            const key = path.replace(/^\//, '').replace(/\/([a-zA-Z0-9])/g, (_m, p) => p.toUpperCase());
            return `${tab}${tab}/** ${name} */\n${tab}${tab}${key}: '/${path}'${index !== pages.length - 1 ? ',' : ''}`;
        })
        .join('\n');

    str += '\n};\n\n';

    if (tabBar.length) {
        str +=
            'export const tabbar = ' +
            JSON.stringify(tabBar, undefined, 4)
                .replace(/"(.+)":/g, '$1:')
                // eslint-disable-next-line quotes
                .replace(/: "(.+)"/g, ":'$1'");
        str += ';\n\n';
    }
    fs.writeFile('./src/routes.ts', str, (error) => {
        // 创建失败
        if (error) {
            console.log(`生成失败❌：${error}`);
        }
        // 创建成功
        console.log('🎉🎉🎉🎉路由生成✅');
    });
};

function handleGen() {
    return new Promise((resolve, reject) => {
        const pagesJson = fs.readFileSync('./src/pages.json').toString();
        if (pagesJson) {
            generateRoute(JSON.parse(pagesJson));
        }
    });
}

export default (options) => {
    const { autoRoute = true } = options;

    handleGen();

    if (!autoRoute) {
        return;
    }

    // plugin 主体
    if (watcher) {
        watcher.close();
    }
    watcher = chokidar
        .watch('./src/pages.json', { ignoreInitial: true })
        .on('change', () => {
            handleGen();
        })
        .on('add', () => {
            handleGen();
        })
        .on('unlink', () => {
            handleGen();
        });
};
