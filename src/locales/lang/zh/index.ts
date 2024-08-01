const files: Record<string, any> = import.meta.glob(
  './routes/*.json',
  {
    eager: true
  }
)
const routes = {}

for (const key in files) {
  const module = files[key]
  Object.assign(routes, { ...module.default })
}



const zh = {
  test: '测试',
  Credits: '积分',
  langSeeting: {
    toggle: '语言',
    chinese: '简体中文',
    english: '英文'
  },
  routes
}
export default zh
