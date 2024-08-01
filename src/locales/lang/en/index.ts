
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

console.log('=========', routes);


const en = {
  test: 'test',
  Credits: 'Credits',
  langSeeting: {
    toggle: 'Language',
    chinese: 'Chinese',
    english: 'English'
  },
  routes
}
export default en
