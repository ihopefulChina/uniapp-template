/// <reference types="vite/client" />

// src/types/core-decorators.d.ts
declare module 'core-decorators/lib/autobind' {
  const autobind: MethodDecorator
  export default autobind
}

/** 以下因为是vue2组件 ts报错 */
declare module '~/components/common/richText/RichText.vue'

interface ImportMetaEnv {
  /** 接口请求 */
  readonly VITE_API_URL: string
}
