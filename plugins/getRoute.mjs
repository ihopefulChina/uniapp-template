import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { parse } from 'jsonc-parser';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const PAGE_JSON_PATH = path.resolve(__dirname, '../src/pages.json');
const OUTPUT_ROUTE_TS = path.resolve(__dirname, '../src/routes.ts');
const ROUTE_PARAMS_PATH = path.resolve(__dirname, '../src/RouteParams.d.ts');

function formatRouteKey(pagePath) {
    return pagePath
        .split('/')
        .map((seg, i) => (i === 0 ? seg : seg.charAt(0).toUpperCase() + seg.slice(1)))
        .join('')
        .replace(/[^a-zA-Z0-9]/g, '');
}

function getTitleOrPath(page) {
    if (page.name) {
        return page.name.trim();
    } else if (page.style && typeof page.style.navigationBarTitleText === 'string' && page.style.navigationBarTitleText.trim()) {
        return page.style.navigationBarTitleText.trim();
    }
    return page.path;
}

function walkPages(pages, root = '') {
    const results = [];
    for (const page of pages || []) {
        if (!page || !page.path) continue;
        const fullPath = root ? `${root}/${page.path}` : page.path;
        const titleOrPath = getTitleOrPath(page);
        results.push({ path: fullPath, titleOrPath });
    }
    return results;
}

function walkSubPackages(subPackages) {
    const results = [];
    for (const pkg of subPackages || []) {
        const root = pkg.root || '';
        results.push(...walkPages(pkg.pages, root));
    }
    return results;
}

function extractExistingFields(content) {
    const fields = {};
    const regex = /\/\*\*\s*(.*?)\s*\*\/\s*\n\s*([a-zA-Z0-9_]+):\s*([^;]+);/g;
    let match;
    while ((match = regex.exec(content))) {
        const [, comment, name, type] = match;
        fields[name] = { type: type.trim(), comment: comment.trim() };
    }
    return fields;
}

function generateRouteParams(routeMap, titleMap) {
    return fs
        .readFile(ROUTE_PARAMS_PATH, 'utf-8')
        .catch(() => '')
        .then((existingContent) => {
            const existingFields = extractExistingFields(existingContent);

            for (const [routeKey, path] of routeMap.entries()) {
                if (!existingFields[routeKey]) {
                    existingFields[routeKey] = {
                        type: 'DefaultParam',
                        comment: titleMap.get(routeKey) || path,
                    };
                }
            }

            const lines = [];
            lines.push('// 此文件由脚本自动维护');
            lines.push('type DefaultParam = Record<string, string | number>;');
            lines.push('');
            lines.push('/**');
            lines.push(' * 路由参数配置');
            lines.push(' */');
            lines.push('export interface RouteParams {');

            for (const [key, { type, comment }] of Object.entries(existingFields)) {
                lines.push(`  /** ${comment || key} */`);
                lines.push(`  ${key}: ${type};`);
            }

            lines.push('}');

            return fs.writeFile(ROUTE_PARAMS_PATH, lines.join('\n'), 'utf-8');
        })
        .then(() => {
            console.log('✅ RouteParams.d.ts 已更新');
        });
}

async function main() {
    try {
        const raw = await fs.readFile(PAGE_JSON_PATH, 'utf-8');
        const json = parse(raw);

        const pagesList = walkPages(json.pages);
        const subPkgList = walkSubPackages(json.subPackages);
        const allPages = [...pagesList, ...subPkgList];

        const routeMap = new Map();
        const titleMap = new Map();

        allPages.forEach(({ path, titleOrPath }) => {
            const key = formatRouteKey(path);
            if (!routeMap.has(key)) {
                routeMap.set(key, path);
                titleMap.set(key, titleOrPath);
            }
        });

        // ✅ routes.ts
        const routeLines = [];
        routeLines.push('// 此文件由脚本自动生成，请勿手动修改');
        routeLines.push('export const routeNames = {');

        for (const [key, path] of routeMap.entries()) {
            const title = titleMap.get(key);
            routeLines.push(`  /** ${title} */`);
            routeLines.push(`  ${key}: '/${path}',`);
        }

        routeLines.push('};');
        routeLines.push(''); // 空行

        // ✅ 添加 tabbar 项
        const tabBarList = json?.tabBar?.list;
        const tabbarItems = tabBarList.map((it) => it?.pagePath);
        routeLines.push('export const tabbar = [');
        for (const url of tabbarItems) {
            routeLines.push(`  { url: '/${url}' },`);
        }
        routeLines.push('];');

        await fs.writeFile(OUTPUT_ROUTE_TS, routeLines.join('\n'), 'utf-8');
        console.log('✅ routes.ts 生成成功');

        // ✅ RouteParams.d.ts
        await generateRouteParams(routeMap, titleMap);
    } catch (err) {
        console.error('❌ 生成失败:', err);
    }
}

main();
