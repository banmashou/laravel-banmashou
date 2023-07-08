import { MockMethod } from 'vite-plugin-mock'
import { ApiEnum } from '../../src/enum/ApiEnum'

export default [
  {
    url: '/api/' + ApiEnum.LOGIN,
    method: 'post',
    response: () => {
      return {
        token: 'banmashou.com',
      }
    },
  },
  {
    url: '/api/' + ApiEnum.FORGOT_PASSWORD,
    method: 'post',
    response: () => {
      return {
        token: 'banmashou.com',
      }
    },
  },
  {
    url: '/api/' + ApiEnum.REGISTER,
    method: 'post',
    response: () => {
      return {
        token: 'banmashou.com',
      }
    },
  },
] as MockMethod[]
