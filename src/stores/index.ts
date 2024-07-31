import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { useLoginStore } from './modules'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  pinia.use(piniaPluginPersistedstate)
  // 1.use的pinia
  app.use(pinia)

  useLoginStore()?.loadLocalCacheAction()
}

export default registerStore
