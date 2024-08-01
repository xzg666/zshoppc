import { createRouter, createWebHistory } from 'vue-router'
import { useLoginStore } from '@/stores/modules'
import ErrorPage from '@/views/404.vue'
import { firstMenuUrl } from '@/utils/menu'

import constantRouterMap from './src'
const { RouteConstant } = constantRouterMap


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...RouteConstant,
    {
      path: '/:pathMatch(.*)',
      component: ErrorPage
    }
  ]
})

router.beforeEach((to) => {
  // console.log('getRoutes', router.getRoutes(), to);
  if (to.path !== '/login' && !useLoginStore()?.token) {
    return '/login'
  }

  // 如果是进入到首页，匹配到第一个路由页
  if (to.path === '/') {
    return (firstMenuUrl as string)
  }
})

export default router
