import { createI18n } from 'vue-i18n' // 引入vue-i18n组件
//router
import routerLang from './lang/router.json'

// 其他的使用插件库加du-i18n、i18n Ally
import pluginLang from '../message/index.ts'


export const getCurrLang = () => {
  // const localLang = navigator.language.split('-')[0]; // 浏览器语言
  const { lang } = JSON.parse(localStorage.getItem('lang') ?? '{}') // 本地存储语言
  return lang || 'zh'
}

//注册i18n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  locale: getCurrLang(), // 语言标识
  fallbackLocale: 'zh', //没有英文的时候默认中文语言
  messages: {
    zh: { ...routerLang.zh, ...pluginLang.zh },
    en: { ...routerLang.en, ...pluginLang.en }
  }
})
export default i18n

