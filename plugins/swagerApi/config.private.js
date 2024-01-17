const fs = require('fs-extra');
const path = require('path');

module.exports = {
    /**
     * 文档生成来源
     * swagger = swagger 文档生成模式
     * apifox => 通过apifox客户端生成
     */
    docSource: 'apifox',
    /** 输出地址 */
    output: path.resolve(process.cwd(), './src/request'),
    /** swagger api 配置选项 */
    swaggerOption: {
        host: '',
        basePath: '',
        // basePath: '/heading/cx/main'
    },
    apifoxOption: {
        //p2
        projects: [{ name: '', url: 'http://127.0.0.1:4523/export/openapi?projectId=3690044&version=2.0' }],
        //p1
        // projects: [{ name: '', url: 'http://127.0.0.1:4523/export/openapi?projectId=3345192&version=2.0' }],
    },
    /**
     * swagger-typescript-api 选项.
     *
     * 详情见 https://github.com/acacode/swagger-typescript-api#-usage
     * */
    swaggerTypescriptApiOption: {
        // url: address + '/admin/v2/api-docs',
        // url: 'http://cxerp-sd.k8s1.internal.weimobqa.com/heading/cx/main/v2/api-docs?group=WEB%E7%95%8C%E9%9D%A2.%E9%A6%96%E9%A1%B5',
        // input: path.resolve(process.cwd(), CACHE_FILE),
        // output: path.resolve("./src/request"),
        templates: path.resolve(__dirname, './api-templates'),
        modular: true,
        httpClientType: 'fetch', // or "fetch"
        // defaultResponseAsSuccess: false,
        // generateRouteTypes: false,
        generateResponses: true,
        // toJS: false,
        extractRequestParams: true,
        // extractRequestBody: false,
        prettier: {
            printWidth: 120,
            tabWidth: 2,
            trailingComma: 'none',
            parser: 'typescript',
        },
        // defaultResponseType: "void",
        // singleHttpClient: true,
        cleanOutput: true,
        enumNamesAsValues: true,
        // moduleNameIndex: 1,
        // moduleNameFirstTag: true,
        generateUnionEnums: true,
        // extraTemplates: [],
        hooks: {
            onFormatRouteName: (routeInfo, templateRouteName) => {
                const { route, method } = routeInfo;
                return `'${route}_${method.toUpperCase()}'`;
            },
        },
    },
    /** 分组名称映射表 */
    groupNameMap: {
        // 系统: 'system',
        // 'WEB界面.报表': 'reports',
        // 'WEB界面.采购': 'procurement',
        // 'WEB界面.仓库': 'warehouse',
        // 'WEB界面.促销': 'promotion',
        // 'WEB界面.工具': 'tool',
        // 'WEB界面.会员': 'member',
        // 'WEB界面.批发': 'wholesale',
        // 'WEB界面.设备': 'device',
        // 'WEB界面.首页': 'home'
    },
};
