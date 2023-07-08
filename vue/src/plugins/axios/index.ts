/**
 * @description: axios封装
 * @author: 斑马兽
 */
import Axios from './Axios'

const http = new Axios({
	baseURL: '/api',
	timeout: 100000,
	headers: {},
})

export { http }
