import './assets/css/main.less'
import 'normalize.css'

import { createApp } from 'vue'
import store from './stores'

import App from './App.vue'
import router from './router'


import i18n from "@/i18n/locales/index.ts";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'


const app = createApp(App)

app.use(ElementPlus)
app.use(store)
app.use(router)

app.use(i18n)

for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.mount('#app')
