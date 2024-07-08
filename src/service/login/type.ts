export interface IAccount {
  account: string
  password: string
  code: string
}

export interface ILoginResult {
  id: number
  name: string
  token: string
}

export interface IDateType<T = any> {
  code: number
  data: T
}
