import { createPinia } from 'pinia'
import type { App } from 'vue'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()

function registerStore(app: App<Element>) {
  pinia.use(piniaPluginPersistedstate)
  // 1.use的pinia
  app.use(pinia)


}

export default registerStore
