# UniApp Template

一个基于 Vue 3 + TypeScript + Pinia 的 UniApp 跨平台开发模板项目，集成了完整的开发工具链和组件库。

## 项目特性

- 🚀 **Vue 3** - 使用最新的 Vue 3 Composition API
- 📱 **跨平台** - 支持微信小程序、H5、App 等多个平台
- 🔧 **TypeScript** - 完整的 TypeScript 支持
- 📦 **Pinia** - 现代化的状态管理
- 🎨 **Sass/SCSS** - CSS 预处理器支持
- 📡 **API 管理** - 集成 Swagger API 模板生成
- 🔍 **ESLint + Prettier** - 代码质量检查和格式化
- 📁 **Monorepo** - 使用 pnpm workspace 管理多包项目
- 🎯 **Wot Design Uni** - 集成完整的UI组件库
- 🛠️ **开发工具** - 自动路由生成、页面监听等插件
- 🔐 **权限管理** - 完整的登录授权和token管理
- 📤 **文件上传** - 集成阿里云OSS文件上传功能
- 📊 **状态管理** - 丰富的Vue 3 Hooks和状态管理工具

## 项目结构

```
uniapp-template/
├── components/                    # 公共组件和工具
│   ├── eslint-config/            # ESLint 配置包
│   └── swagger-api-templates/    # API 模板生成工具
├── packages/
│   └── uni-template/             # 主要的 UniApp 项目
│       ├── src/
│       │   ├── pages/            # 页面文件
│       │   │   ├── common/       # 公共页面
│       │   │   ├── tabbar/       # 底部导航页面
│       │   │   └── template/     # 模板页面
│       │   ├── components/       # 组件
│       │   │   ├── common/       # 公共组件
│       │   │   ├── help/         # 帮助组件
│       │   │   └── request/      # 请求相关组件
│       │   ├── layout/           # 布局组件
│       │   │   ├── navigation/   # 导航栏组件
│       │   │   └── pageContainer/# 页面容器组件
│       │   ├── store/            # Pinia 状态管理
│       │   ├── request/          # API 请求封装
│       │   ├── utils/            # 工具函数
│       │   ├── hooks/            # Vue 3 Hooks
│       │   ├── enums/            # 枚举定义
│       │   ├── types/            # 类型定义
│       │   ├── static/           # 静态资源
│       │   └── uni_modules/      # UniApp 模块
│       │       └── wot-design-uni/ # Wot Design Uni 组件库
│       ├── plugins/              # 自定义插件
│       ├── scripts/              # 构建脚本
│       └── dist/                 # 构建输出
├── package.json                  # 根包配置
├── pnpm-workspace.yaml          # pnpm 工作区配置
└── README.md                     # 项目说明文档
```

## 快速开始

### 环境要求

- Node.js >= 18
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发命令

```bash
# 进入项目目录
cd packages/uni-template

# 微信小程序开发
pnpm dev

# H5 开发
pnpm dev:h5

# App 开发
pnpm dev:app

# 其他平台
pnpm dev:mp-alipay    # 支付宝小程序
pnpm dev:mp-baidu     # 百度小程序
pnpm dev:mp-qq        # QQ 小程序
pnpm dev:mp-toutiao   # 字节跳动小程序
pnpm dev:mp-kuaishou  # 快手小程序
pnpm dev:mp-jd        # 京东小程序
pnpm dev:mp-lark      # 飞书小程序
```

### 构建命令

```bash
# 进入项目目录
cd packages/uni-template

# 微信小程序构建
pnpm build

# H5 构建
pnpm build:h5

# App 构建
pnpm build:app
```

### API 生成

```bash
# 进入项目目录
cd packages/uni-template

# 根据apifox/swagger 文档导出接口json地址，修改项目配置文件：swaggerApi.config.js
projects: [{ name: '', url: 'http://127.0.0.1:4523/export/openapi/2?version=3.0' }]

# 根据 apifox 文档生成 API 接口
pnpm api
```

## 核心组件

### 布局组件

- **Navigation** - 自定义导航栏组件，支持状态栏高度适配
- **PageContainer** - 页面容器组件，统一页面布局

### 公共组件

- **ImageUpload** - 图片上传组件，支持多图上传、预览、删除
- **Poster** - 海报生成组件，支持Canvas绘制和图片合成
- **PullToRefresh** - 下拉刷新组件，支持自定义刷新逻辑
- **RefreshList** - 列表刷新组件，集成下拉刷新和上拉加载
- **RichText** - 富文本组件，支持HTML内容渲染
- **Ellipsis** - 文本省略组件，支持多行文本截断

### UI 组件库

项目集成了 **Wot Design Uni** 组件库，包含：

- 基础组件：Button、Cell、Icon、Input、Gap、Divider等
- 表单组件：Form、Checkbox、Radio、Switch、InputNumber等
- 反馈组件：Toast、Dialog、Loading、Notify、MessageBox等
- 展示组件：Card、Tag、Badge、Progress、Circle等
- 导航组件：Tabs、Tabbar、Navbar、Sidebar、IndexBar等
- 数据录入：DatetimePicker、Calendar、ColPicker、PasswordInput等

### 样式文件组织

```
src/
├── assets/
│   └── index.scss          # 全局样式入口
├── components/
│   └── */index.scss        # 组件样式文件
├── pages/
│   └── */index.scss        # 页面样式文件
└── layout/
    └── */index.scss        # 布局样式文件
```

### 主题变量

使用 CSS 变量定义主题色彩和尺寸：

```scss
:root {
  --wot-color-theme: #517cf0;
  --wot-color-success: #34d19d;
  --wot-color-warning: #f0883a;
  --wot-color-danger: #fa4350;
}
```

## 开发工具

### 插件工具

项目包含两个自定义插件，用于自动化开发流程：

#### 路由生成插件 (`getRoute.mjs`)

```bash
# 进入项目目录
cd packages/uni-template

# 手动生成路由文件
pnpm route
```

**功能说明：**

- 自动读取 `src/pages.json` 配置
- 生成 `src/routes.ts` 路由映射文件
- 生成 `src/RouteParams.d.ts` 路由参数类型定义
- 支持主包页面和分包页面
- 自动提取页面标题和路径信息
- 生成 tabbar 页面配置

**生成的文件：**

- `routes.ts` - 包含 `routeNames` 对象和类型定义
- `RouteParams.d.ts` - 路由参数的 TypeScript 类型定义

#### 页面监听插件 (`watch-pages.mjs`)

```bash
# 开发模式下自动运行（包含在 dev 命令中）
pnpm dev
```

**功能说明：**

- 监听 `src/pages.json` 文件变化
- 文件变更时自动重新生成路由文件
- 开发模式下提供实时路由更新
- 避免手动维护路由映射的繁琐工作

**工作流程：**

1. 启动时执行一次路由生成
2. 持续监听 `pages.json` 文件
3. 检测到变更时自动重新生成路由文件
4. 控制台输出生成状态和结果

## 状态管理

### Pinia Store

使用 Pinia 进行状态管理，store 文件放在 `src/store/` 目录下：

```typescript
// src/store/common/useGlobalStore.ts
export const useGlobalStore = defineStore('globalStore', () => {
  const userInfo = ref<MemberDto>()

  const getUserInfo = async () => {
    const { data, code } = await api.get['/api/member/v1/member/getUserInfo']()
    data && setUserInfo(data)
    return { data, code }
  }

  return { userInfo, getUserInfo }
})
```

**主要Store：**

- `useGlobalStore` - 全局状态管理，用户信息、登录状态等
- `useSystemInfo` - 系统信息管理，设备信息、屏幕尺寸等
- `useGetAccountInfo` - 小程序环境信息管理

### 组合式函数 (Hooks)

项目提供了多个实用的组合式函数：

#### 状态管理类

- `useBoolean` - 布尔值状态管理，支持setTrue/setFalse/toggle等操作
- `useToggle` - 切换状态管理，支持两个值之间的切换
- `useState` - 受控/非受控状态管理，类似React的useState
- `useUpdate` - 强制更新组件

#### 表单和数据处理

- `useFormService` - 表单服务封装，支持表单数据管理和重置
- `useMutate` - 数据获取和状态管理，支持数据格式化
- `usePullToRefresh` - 下拉刷新和上拉加载更多
- `useModify` - 页面数据修改和更新

#### 页面和导航

- `useNavigation` - 页面导航管理，支持各种跳转方式
- `useParams` - 页面参数获取，支持场景值解析
- `useGetParams` - 组件中获取页面参数
- `useScroll` - 滚动监听和吸顶效果

#### 工具类

- `useLockFn` - 函数防抖和锁定，防止重复调用
- `useNetworkStatus` - 网络状态监听
- `useUpdateEffect` - 忽略首次执行的effect

## API 请求

项目使用自定义封装的请求库，支持根据swagger文档生成ts、自动token管理和静默授权，以及统一的错误处理和响应拦截。

### 请求封装

使用自定义封装的请求库，配置文件在 `src/request/` 目录下：

```typescript
// 使用请求
const data = await api.get['/api/member/v1/activity/activity']()
const result = await api.post['/api/auth/login']({ username, password })
```

**特性：**

- 根据swagger文档生成ts
- 自动token管理和静默授权
- 统一的错误处理和响应拦截
- 支持请求和响应拦截器
- 自动处理FormData和查询参数

### 请求实例

```typescript
// src/request/instance.ts
const instance = Request.create({ baseUrl: apiUrl })

// 请求拦截器 - 自动添加token
instance.requestInterceptors.use(async (config) => {
  let token = getAuthorization()
  if (!token && silentAuthorization) {
    const { data } = await getToken(silentAuthorizationUrl)
    token = data
    setAuthorization(token)
  }
  config.headers = { ...config.headers, Authorization: token }
  return config
})

// 响应拦截器 - 统一错误处理
instance.responseInterceptors.use((res) => {
  if ([403, 40003, 401].indexOf(res.data.code) !== -1) {
    // token过期处理
    removeAuthorization()
    loginUrl && uni.navigateTo({ url: loginUrl })
    throw new Error()
  }
  return res.data
})
```

## 工具函数

### 文件处理

- **阿里云OSS上传** - 支持图片、文件上传到阿里云OSS
- **图片处理** - 图片压缩、裁剪、格式转换等
- **文件类型检测** - 自动识别图片、视频、音频、PDF等文件类型

### 数据处理

- **高精度计算** - 解决JavaScript浮点数精度问题
- **数据格式化** - 金额格式化、电话号码脱敏等
- **数组操作** - 去重、排序、转换等工具函数

### 平台适配

- **设备信息** - 获取设备型号、屏幕尺寸、状态栏高度等
- **平台检测** - 自动识别当前运行平台
- **网络状态** - 监听网络状态变化

## 支持平台

- ✅ 微信小程序 (MP-WEIXIN)
- ✅ H5 (H5)
- ✅ App (Android/iOS)
- ✅ 支付宝小程序 (MP-ALIPAY)
- ✅ 百度小程序 (MP-BAIDU)
- ✅ QQ 小程序 (MP-QQ)
- ✅ 字节跳动小程序 (MP-TOUTIAO)
- ✅ 快手小程序 (MP-KUAISHOU)
- ✅ 京东小程序 (MP-JD)
- ✅ 飞书小程序 (MP-LARK)
- ✅ 快应用 (QUICKAPP-WEBVIEW)

## 技术栈

- **框架**: UniApp 3.x + Vue 3.5.11
- **前端**: Vue 3 + TypeScript 5.9.2
- **状态管理**: Pinia 2.3.1
- **样式**: Sass 1.66.1
- **构建工具**: Vite 5.2.11
- **代码规范**: ESLint 8.57.1 + Prettier 3.6.2
- **包管理**: pnpm workspace
- **API 工具**: 自定义请求封装 + Swagger 模板生成
- **UI 组件**: Wot Design Uni
- **开发工具**: 自动路由生成、页面监听等插件
- **工具库**: dayjs 1.11.13 (日期处理)

## 开发指南

### 页面路由

页面路由配置在 `src/pages.json` 中，支持自动路由生成。

### 组件开发

公共组件放在 `src/components/` 目录下，支持 TypeScript 类型定义：

```vue
<template>
  <view class="custom-component">
    <slot />
  </view>
</template>

<script setup lang="ts">
interface Props {
  title?: string
}

defineProps<Props>()
</script>
```

### 类型定义

项目包含完整的 TypeScript 类型定义：

- `src/types/` - 全局类型定义
- `src/enums/` - 枚举定义
- `src/request/types/` - 请求相关类型
- `src/components/request/types/` - 请求组件类型

## 配置说明

### 环境配置

- `src/config.ts` - 应用配置，API地址、登录配置等
- `src/manifest.json` - 应用清单文件
- `vite.config.ts` - Vite 构建配置
- `tsconfig.json` - TypeScript 配置

### API 配置

- `swaggerApi.config.js` - Swagger API 生成配置

### ESLint 配置

- `components/eslint-config/` - 统一的 ESLint 配置

## 部署说明

### 小程序部署

1. 构建项目：`pnpm build`
2. 使用微信开发者工具打开 `dist/build/mp-weixin` 目录
3. 上传代码到微信小程序后台

### H5 部署

1. 构建项目：`pnpm build:h5`
2. 将 `dist/build/h5` 目录部署到 Web 服务器

### App 部署

1. 构建项目：`pnpm build:app`
2. 使用 HBuilderX 打开项目
3. 云打包或本地打包

## 常见问题

### 路由生成失败

检查 `src/pages.json` 文件格式是否正确，确保 JSON 语法无误。

### 组件库样式问题

确保正确引入了 Wot Design Uni 的样式文件，检查 `src/main.ts` 中的导入。

### 请求失败

检查 `src/config.ts` 中的API地址配置，确保网络环境正常。

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 更新日志

### v3.0.0

- Monorepo + pnpm workspace 构建
- 集成 Vue 3 + TypeScript + Pinia
- 集成 Wot Design Uni 组件库
- 添加自动路由生成插件
- 添加页面监听插件
- 完整的请求封装和拦截器
- 丰富的Vue 3 Hooks工具库
- 阿里云OSS文件上传集成
- 完整的权限管理和登录流程

## 许可证

[ISC](LICENSE)

## 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件
- 参与讨论
