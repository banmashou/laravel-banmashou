/**
 * @description: 获取用户信息
 * @author: 斑马兽
 * @defineStore user
 */
import { defineStore } from 'pinia'
import userApi, { User } from '@/apis/userApi'
import { CacheEnum } from '@/enum/cacheEnum'
import store from '@/utils/store'

export default defineStore('user', {
	state: () => {
		return {
			info: {} as null | User,
		}
	},
	actions: {
		async getUserInfo() {
			// if (store.get(CacheEnum.TOKEN_NAME)) {
			const res = await userApi.info()
			this.info = res.data
		}
		// },
	},
})
