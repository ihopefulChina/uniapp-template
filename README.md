# UniApp Template

一个基于 Vue 3 + TypeScript + Pinia 的 UniApp 跨平台开发模板项目。

## 项目特性

- 🚀 **Vue 3** - 使用最新的 Vue 3 Composition API
- 📱 **跨平台** - 支持微信小程序、H5、App 等多个平台
- 🔧 **TypeScript** - 完整的 TypeScript 支持
- 📦 **Pinia** - 现代化的状态管理
- 🎨 **Sass** - CSS 预处理器支持
- 📡 **API 管理** - 集成 Swagger API 模板生成
- 🔍 **ESLint** - 代码质量检查
- 📁 **Monorepo** - 使用 pnpm workspace 管理多包项目

## 项目结构

```
├── packages/
│   └── uni-template/          # 主要的 UniApp 项目
│       ├── src/
│       │   ├── pages/         # 页面文件
│       │   ├── components/    # 组件
│       │   ├── state/         # Pinia 状态管理
│       │   ├── request/       # API 请求封装
│       │   ├── utils/         # 工具函数
│       │   └── hooks/         # Vue 3 Hooks
│       ├── plugins/           # 自定义插件
│       └── dist/              # 构建输出
├── components/
│   ├── eslint-config/         # ESLint 配置包
│   └── swagger-api-templates/ # API 模板生成工具
└── node_modules/              # 依赖包
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

## 开发指南

### 页面路由

页面路由配置在 `src/pages.json` 中，支持自动路由生成。

### 状态管理

使用 Pinia 进行状态管理，store 文件放在 `src/state/` 目录下。

### API 请求

使用 api-request 封装的请求库，配置文件在 `src/request/` 目录下。

### 组件开发

公共组件放在 `src/components/` 目录下，支持 TypeScript 类型定义。

## 配置说明

### 环境配置

- `src/config.ts` - 应用配置
- `src/manifest.json` - 应用清单文件
- `vite.config.ts` - Vite 构建配置

### API 配置

- `swaggerApi.config.js` - Swagger API 生成配置

## 贡献指南

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 许可证

[ISC](LICENSE)
