//开发环境：development
//生产环境：production
//测试环境：test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'

} else if (process.env.NOOD_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}
// console.log(BASE_URL)

export { BASE_URL, TIME_OUT }
