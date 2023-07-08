import { http } from "@/plugins/axios"

export default () => {

	const login = async (data: any) => {
		await http.request({
			url: 'auth/login',
			method: 'POST',
			data,
		})
	}

	return { login }
}
