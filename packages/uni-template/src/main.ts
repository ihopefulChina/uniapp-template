import { createSSRApp } from 'vue'
import App from './App.vue'
import { setupStore } from '~/state'
import { install } from '~/uni_modules/tuniaoui-vue3'

export function createApp() {
  const app = createSSRApp(App)
  setupStore(app)

  // 全局注册 TuniaoUI 组件
  app.use(install)

  return { app }
}
