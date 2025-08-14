/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

module.exports = {
  /**
   * 文档生成来源
   * swagger = swagger 文档生成模式
   * apifox => 通过apifox客户端生成
   */
  docSource: 'apifox',
  /** 是否打印配置 */
  logger: false,
  /**
   * 输出地址
   * 默认为src/request
   */
  output: path.resolve(process.cwd(), './src/request'),
  /** swagger api 配置选项 */
  swaggerOption: {
    /**
     * swagger地址
     * @default 默认使用package.json中的proxy
     * @description 如果你的文档生成地址与开发代理地址不一致时.你可以手动修改
     * */
    host: '',
    /** swagger basePath */
    basePath: '/admin'
  },
  /** 接口钩子函数 */
  apiHook: {
    /**
     * 当获取到所有接口地址时
     *
     * 你可以在这里定义一些接口过滤规则
     *
     */
    // onPaths: (paths) => {
    //   return paths.filter((path)=> path.indexOf('/admin') === 0)
    // }
  },

  apifoxOption: {
    projects: [
      // { name: '', url: 'http://127.0.0.1:4523/export/openapi/6' }
    ]
  },
  /**
   * swagger-typescript-api 选项.
   *
   * 详情见 https://github.com/acacode/swagger-typescript-api#-usage
   * */
  swaggerTypescriptApiOption: {
    // url: address + '/admin/v2/api-docs',
    // input: path.resolve(process.cwd(), CACHE_FILE),
    // output: path.resolve("./src/request"),
    // templates: path.resolve(__dirname, './api-templates'),
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
      parser: 'typescript'
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
      // onCreateRoute: (routeData) => {
      // console.log(routeData, "\n");
      // 移除path前缀名称
      // routeData.request.path = routeData.request.path.replace('/admin/', '')
      // return routeData
      // },
      onFormatRouteName: (routeInfo, templateRouteName) => {
        const { route, method } = routeInfo
        // console.log(routeInfo, templateRouteName, rr);
        return `'${route}_${method.toUpperCase()}'` // 格式化接口名称
      }
    }
  },
  /**
   * 分组名称映射表
   *
   * @description swagger分组 => request 目录名称的映射. 有时候.后端会将分组按照中文进行命名.这时候你可以通过映射表来修改目录名称
   */
  groupNameMap: {
    // 系统: 'system',
    // 'WEB界面-报表': 'reports',
  }
}
