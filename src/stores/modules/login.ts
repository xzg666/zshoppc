import { defineStore } from 'pinia'

import type { IAccount } from '@/types'
import { login, getUserInfo, getUserMenus } from '@/service/login'
import { ElMessage } from 'element-plus'
import router from '@/router'

import IndexView from '@/views/index.vue'

import constantRouterMap from '@/router/src'
import { mapMenusToRoute } from '@/utils/menu'

const { RouteConstant, RouteEntity, RouteWxapp } = constantRouterMap

interface ILoginState {
  token: string | null
  userInfo: any
  userMenus: any
  permission: string[] | null
}

const useLoginStore = defineStore('login', {
  state: (): ILoginState => ({
    token: null,
    userInfo: {},
    userMenus: [],
    permission: null
  }),
  actions: {
    async loginAccountAction(account: IAccount) {

      //1.拿token
      const loginRes = await login(account)
      console.log(666, account, loginRes.data);
      if (loginRes.data.statusCode == 403) {
        return ElMessage.error(loginRes.data.message)
      }
      this.token = loginRes.data.token!

      //2.获取用户信息
      const userInfoRes = await getUserInfo()
      console.log('userInfoRes', userInfoRes);
      this.userInfo = userInfoRes.data

      //3.获取用户菜单
      const userMenusRes = await getUserMenus()
      this.userMenus = userMenusRes.data


      // 4.动态加路由
      const newRouter = mapMenusToRoute(this.userMenus)
      newRouter.forEach(route => router.addRoute(route))

      ElMessage.success('登录成功')

      //5.跳转
      router.push('/')

    },
    handleLogout() {
      this.token = null
    },
    async loadLocalCacheAction() {
      if (this.token && this.userMenus.length) {
        //刷新重新请求用户菜单

        const newRouter = mapMenusToRoute(this.userMenus)
        newRouter.forEach(route => router.addRoute(route))
      }
    }
  },
  persist: true
})

export default useLoginStore
