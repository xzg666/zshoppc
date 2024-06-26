import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: IndexView
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/login/index.vue')
    }
  ]
})

router.beforeEach((to) => {
  // 只有登录成功(token), 才能真正进入到main页面
  if (to.path.startsWith('/main')) {
    console.log(to.path);
    return '/login'
  }

  // 如果是进入到main
  // if (to.path === '/') {
  //   return firstMenu?.url
  // }
})

export default router
