import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      vue: 'vue/dist/vue.esm-bundler.js',
    }
  },
  // 配置代理
  server: {
    proxy: {
      '/api': { // 获取请求中带 /api 的请求
        target: 'http://localhost:3000',  // 后台服务器的源
        changeOrigin: true,   // 修改源
        rewrite: (path) => path.replace(/^\/api/, "")   //  /api 替换为空字符串
      }
    }
  }
})
