import { defineStore } from 'pinia'

import type { IAccount } from '@/types'
import { login, getUserInfo, getPermission } from '@/service/login'
import { ElMessage } from 'element-plus'
import router from '@/router'



interface ILoginState {
  token: string | null
  userInfo: any
  userMenus: any
  permission: string[] | null
}

const useLoginStore = defineStore('login', {
  // 如何制定state的类型
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
        ElMessage.error(loginRes.data.message)
      }
      this.token = loginRes.data.token!

      //2.获取用户信息
      const userInfoRes = await getUserInfo(2)
      console.log('userInfoRes', userInfoRes);
      this.userInfo = userInfoRes.data

      //3.
      router.push('/')

    },
    async loginPermissionsAction() {
      const permissionRes = await getPermission()
      this.permission = permissionRes.data
      return permissionRes.data

    },
  },
  persist: true
})

export default useLoginStore
