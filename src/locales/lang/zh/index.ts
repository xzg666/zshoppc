import { getAllPageLang } from '@/utils/menu'

const files: Record<string, any> = import.meta.glob(
  './src/**/*.json',
  {
    eager: true
  }
)

const AllPageLang = getAllPageLang(files)

const zh = {
  test: '测试',
  Credits: '积分',
  langSeeting: {
    toggle: '语言',
    chinese: '简体中文',
    english: '英文'
  },
  ...AllPageLang
}
export default zh
