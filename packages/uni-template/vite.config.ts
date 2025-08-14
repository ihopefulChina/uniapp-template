import { defineConfig, Plugin } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
const path = require('path')

import Components from '@uni-helper/vite-plugin-uni-components'
import { WotResolver } from '@uni-helper/vite-plugin-uni-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Components({
      resolvers: [WotResolver()]
    }),
    uni()
  ],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src')
    }
  }
})
