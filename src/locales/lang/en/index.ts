import { getAllPageLang } from '@/utils/menu'

const files: Record<string, any> = import.meta.glob(
  './src/**/*.json',
  {
    eager: true
  }
)

const AllPageLang = getAllPageLang(files)

const en = {
  test: 'test',
  Credits: 'Credits',
  langSeeting: {
    toggle: 'Language',
    chinese: 'Chinese',
    english: 'English'
  },
  ...AllPageLang
}

export default en
