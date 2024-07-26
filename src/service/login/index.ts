import hyRequest from '../index'
import type { ILoginResult, IDateType, IAccount } from './type'


enum LoginAPI {
  AccountLogin = '/login',
  LoginUserInfo = '/users/', //用法：/user/1
  UserMenus = '/role/' //用法：role/1/menu
}

export function accountLoginRequest(account: IAccount) {
  return hyRequest.post<IDateType<ILoginResult>>({
    url: LoginAPI.AccountLogin,
    data: account
  })
}

export function requestUserInfoById(id: number) {
  return hyRequest.get<IDateType>({
    url: LoginAPI.LoginUserInfo + id,
    showLoading: false
  })
}

export function requestUserMenusfoById(id: number) {
  return hyRequest.get<IDateType>({
    url: LoginAPI.UserMenus + id + '/menu',
    showLoading: false
  })
}


export function login(account: IAccount) {
  return hyRequest.post<IDateType<ILoginResult>>({
    url: '/login/create',
    data: account
  })
}

export function getUserInfo(id: number) {
  return hyRequest.get<IDateType>({
    url: '/user/1',
    showLoading: false
  })
}

export function getPermission() {
  return hyRequest.get<IDateType>({
    url: '/permission',
    showLoading: false
  })
}