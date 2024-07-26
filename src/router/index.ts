import { createRouter, createWebHistory } from 'vue-router'
import useLoginStore from '@/stores/login/login'
import { getAllUrls } from '@/utils'
import ErrorPage from '@/views/404.vue'
import IndexView from '@/views/index.vue'
import type { RouteRecordRaw } from 'vue-router'


import constantRouterMap from './src'

const { RouteConstant, RouteEntity, RouteWxapp } = constantRouterMap
console.log('---', RouteConstant, RouteEntity, RouteWxapp);


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    ...RouteConstant
  ]
})

router.beforeEach(async (to) => {
  // 只有登录成功(token), 才能真正进入到main页面
  const loginStore = useLoginStore()
  console.log(123, to, loginStore.permission);

  if (loginStore.token) {
    loginStore?.loginPermissionsAction().then(permission => {
      console.log('permission', permission);

      let menuUrls: string[] = []
      //根据permission获取所有的url
      menuUrls = getAllUrls(permission)
      console.log('menuUrls', menuUrls, constantRouterMap);


      const newRouter: RouteRecordRaw[] = []
      Object.keys(constantRouterMap).forEach(key => {
        if (key != 'RouteConstant') {
          const route = (constantRouterMap as any)[key]
          if (!route.children) {
            if (menuUrls.includes(route.path)) {
              newRouter.push(route)
            }
          } else {
            const _route = {
              ...route,
              children: []
            }

            _route.children = route.children.filter((item: any) => {
              return menuUrls.includes(`${route.path}/${item.path}`)
            })
            newRouter.push(_route)
          }
        }
      })

      newRouter.push(
        {
          path: '/404',
          component: ErrorPage
        }
      )

      router.addRoute(newRouter as any)

      // newRouter.forEach(route => router.addRoute(route))

      // newRouter.forEach((route) => router.addRoute('main', route))



      console.log('newRouter', newRouter, [RouteEntity, RouteWxapp]);





    })

  }




  // 如果是进入到main
  // if (to.path === '/') {
  //   return firstMenu?.url
  // }
})



export default router
