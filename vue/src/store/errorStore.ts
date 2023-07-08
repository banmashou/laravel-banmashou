/**
 * @description: 获取用户信息
 * @author: 斑马兽
 * @defineStore user
 */
import { defineStore } from 'pinia'

export default defineStore('user', {
	state: () => {
		return {
			errors: {},
		}
	},
	actions: {
	},
})
