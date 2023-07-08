import { MockMethod } from 'vite-plugin-mock'
import { ApiEnum } from '../../src/enum/ApiEnum'

export default [
  {
    url: '/api/' + ApiEnum.BASE_CONFIG,
    method: 'get',
    response: () => {
      return {
        base: {
          name: '斑马兽',
        },
        copyright: {
          ad: '斑马兽 人人做后盾',
          weixin: 'banmashou2021',
          email: '2300071698@qq.com',
          icp: '京ICP备99999999-8',
          showXjAvatar: false,
          other: 'Copyright © banmashou.com All Rights Reserved',
        },
      }
    },
  },
] as MockMethod[]
