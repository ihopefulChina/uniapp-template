/// <reference types="@dcloudio/types" />

import 'vue'

declare const uni: Uni

declare function getCurrentPages<T = Record<string, any>>(): Array<Page.PageInstance<T>>

declare module '@vue/runtime-core' {
  type Hooks = App.AppInstance & Page.PageInstance

  interface ComponentCustomOptions extends Hooks {}

  interface  UniNamespace
}
