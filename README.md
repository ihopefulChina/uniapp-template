# UniApp Template

一个基于 Vue 3 + TypeScript + Pinia 的 UniApp 跨平台开发模板项目，集成了完整的开发工具链和组件库。

## 项目特性

- 🚀 **Vue 3** - 使用最新的 Vue 3 Composition API
- 📱 **跨平台** - 支持微信小程序、H5、App 等多个平台
- 🔧 **TypeScript** - 完整的 TypeScript 支持
- 📦 **Pinia** - 现代化的状态管理
- 🎨 **Sass/SCSS** - CSS 预处理器支持，已优化为px单位
- 📡 **API 管理** - 集成 Swagger API 模板生成
- 🔍 **ESLint** - 代码质量检查
- 📁 **Monorepo** - 使用 pnpm workspace 管理多包项目
- 🎯 **Wot Design Uni** - 集成完整的UI组件库
- 🛠️ **开发工具** - 自动路由生成、页面监听等插件

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
│       │   │   │   ├── ellipsis/     # 文本省略组件
│       │   │   │   ├── imageUpload/  # 图片上传组件
│       │   │   │   ├── poster/       # 海报生成组件
│       │   │   │   ├── pullToRefresh/# 下拉刷新组件
│       │   │   │   ├── refreshList/  # 列表刷新组件
│       │   │   │   └── richText/     # 富文本组件
│       │   │   ├── help/         # 帮助组件
│       │   │   └── request/      # 请求相关组件
│       │   ├── layout/           # 布局组件
│       │   │   ├── navigation/   # 导航栏组件
│       │   │   └── pageContainer/# 页面容器组件
│       │   ├── state/            # Pinia 状态管理
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

# 根据 Swagger 文档生成 API 接口
pnpm api
```

## 核心组件

### 公共组件

- **Ellipsis** - 文本省略组件，支持多行省略
- **ImageUpload** - 图片上传组件，支持多图上传和预览
- **Poster** - 海报生成组件，支持自定义模板
- **PullToRefresh** - 下拉刷新组件，支持自定义刷新逻辑
- **RefreshList** - 列表刷新组件，集成上拉加载更多
- **RichText** - 富文本组件，支持HTML内容渲染

### 布局组件

- **Navigation** - 自定义导航栏组件
- **PageContainer** - 页面容器组件，统一页面布局

### UI 组件库

项目集成了 **Wot Design Uni** 组件库，包含：

- 基础组件：Button、Cell、Icon、Input 等
- 表单组件：Form、Checkbox、Radio、Switch 等
- 反馈组件：Toast、Dialog、Loading、Notify 等
- 展示组件：Card、Tag、Badge、Progress 等
- 导航组件：Tabs、Tabbar、Navbar、Sidebar 等

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
# 进入项目目录
cd packages/uni-template

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

使用 Pinia 进行状态管理，store 文件放在 `src/state/` 目录下：

```typescript
// src/state/useGlobalStore.ts
export const useGlobalStore = defineStore('global', {
  state: () => ({
    userInfo: null,
    theme: 'light'
  }),
  actions: {
    setUserInfo(info: UserInfo) {
      this.userInfo = info
    }
  }
})
```

### 组合式函数

项目提供了多个实用的组合式函数：

- `useBoolean` - 布尔值状态管理
- `useFormService` - 表单服务封装
- `useRequest` - 请求状态管理
- `useStorage` - 本地存储封装

## API 请求

### 请求封装

使用 api-request 封装的请求库，配置文件在 `src/request/` 目录下：

```typescript
// 使用请求
const data = await api.get['/api/member/v1/activity/activity']
```

## 支持平台

- ✅ 微信小程序
- ✅ H5
- ✅ App (Android/iOS)
- ✅ 支付宝小程序
- ✅ 百度小程序
- ✅ QQ 小程序
- ✅ 字节跳动小程序
- ✅ 快手小程序
- ✅ 京东小程序
- ✅ 飞书小程序

## 技术栈

- **框架**: UniApp 3.x
- **前端**: Vue 3 + TypeScript
- **状态管理**: Pinia
- **样式**: Sass/SCSS
- **构建工具**: Vite
- **代码规范**: ESLint + TypeScript ESLint
- **包管理**: pnpm workspace
- **API 工具**: api-request + 自定义 Swagger 模板
- **UI 组件**: Wot Design Uni
- **开发工具**: 自动路由生成、页面监听等插件

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

## 配置说明

### 环境配置

- `src/config.ts` - 应用配置
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

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 更新日志

### v3.0.0

- 初始版本发布
- 集成 Vue 3 + TypeScript + Pinia
- 集成 Wot Design Uni 组件库
- 添加自动路由生成插件
- 添加页面监听插件
- 统一样式单位为 px

## 许可证

[ISC](LICENSE)

## 联系方式

如有问题或建议，请通过以下方式联系：

- 提交 Issue
- 发送邮件
- 参与讨论
