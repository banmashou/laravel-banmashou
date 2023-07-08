/**
 * @description: axios封装
 * @author: 斑马兽
 * @param {AxiosRequestConfig} config
 * @return {*}
 */
import { CacheEnum } from '@/enum/cacheEnum'
import router from '@/router'
import errorStore from '@/store/errorStore'
import store from '@/utils/store'
import axios, { AxiosRequestConfig } from 'axios'

export default class Axios {
	// 定义一个私有的静态属性，用来保存实例
	private instance
	// 定义一个私有的构造函数，用来创建实例
	constructor(config: AxiosRequestConfig) {
		// 创建实例
		this.instance = axios.create(config)
		// 拦截器
		this.interceptors()
	}

	public async request<T, D = ResponseResult<T>>(config: AxiosRequestConfig) {
		return new Promise(async (resolve, reject) => {
			try {
				const response = await this.instance.request<D>(config)
				resolve(response.data)
			} catch (error) {
				reject(error)
			}
		}) as Promise<D>
	}

	// 公有的静态方法，用来获取实例
	private interceptors() {
		this.interceptorsRequest()
		this.interceptorsResponse()
	}

	// 请求拦截器
	private interceptorsRequest() {
		this.instance.interceptors.request.use(
			(config) => {
				// 在发送请求之前做些什么
				config.headers = {
					Authorization: 'Bearer' + store.get(CacheEnum.TOKEN_NAME)
				}
				return config
			},
			(error) => {
				// 对请求错误做些什么
				return Promise.reject(error)
			},
		)
	}

	// 响应拦截器
	private interceptorsResponse() {
		this.instance.interceptors.response.use(
			function (response) {
				// 2xx 范围内的状态码都会触发该函数。
				// 对响应数据做点什么
				return response
			},
			(error) => {
				// 超出 2xx 范围的状态码都会触发该函数。
				switch (error.response.status) {
					case 401:
						store.remove(CacheEnum.TOKEN_NAME)
						router.push({ name: 'login' })
						break
					case 422:
						errorStore().errors = {}
						break
				}
				// 对响应错误做点什么
				return Promise.reject(error)
			},
		)
	}
}
