import { createI18n } from 'vue-i18n' // 引入vue-i18n组件
import zh from './lang/zh/index.ts' // 引入zh.js 模块
import en from './lang/en/index.ts' // 引入en.js 模块

export const getCurrLang = () => {
  // const localLang = navigator.language.split('-')[0]; // 浏览器语言
  const { lang } = JSON.parse(localStorage.getItem('lang')) // 本地存储语言
  return lang || 'zh'
}

//注册i18n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  locale: getCurrLang(), // 语言标识
  fallbackLocale: 'zh', //没有英文的时候默认中文语言
  messages: {
    zh,
    en
  }
})
export default i18n
