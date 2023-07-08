import { http } from '@/plugins/axios'
export interface User {
  name: string
  age: number
  avatar: string
  permissions: string[]
}
export interface LoginInterface {
  token: string
}

export interface ILoginData {
  account: string
  password: string
}

// function info() {
// 	return http.request<User>({
// 		url: 'user/info',
// 	})
// }

// function login(data: any) {
// 	return http.request<LoginInterface>({
// 		url: 'login',
// 		method: 'POST',
// 		data,
// 	})
// }
class userApi {
  info() {
    return http.request<User>({
      url: 'user/info',
    })
  }

  login(data: ILoginData) {
    return http.request<LoginInterface>({
      url: 'login',
      method: 'POST',
      data,
    })
  }
}

export default new userApi()
