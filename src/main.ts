import './assets/css/main.less'
import 'normalize.css'

import { createApp, createVNode, h, nextTick } from 'vue'
import store from './stores'

import App from './App.vue'
import router from './router'


import i18n, { getCurrLang } from "@/i18n";

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import elementplusZhCn from 'element-plus/es/locale/lang/zh-cn'
import elementplusEn from 'element-plus/es/locale/lang/en'

import { globalRegitser } from './global'
import { ZzPickerPlugin } from '@/components/zz-picker'

//mock
import '@/mock'

const app = createApp(App)
console.log(getCurrLang());

app.use(store)
app.use(router)
app.use(i18n)
app.use(ElementPlus, {
    locale: getCurrLang() == 'zh' ? elementplusZhCn : elementplusEn,
})
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(globalRegitser)

app.use(ZzPickerPlugin)

app.mount('#app')

export default app
