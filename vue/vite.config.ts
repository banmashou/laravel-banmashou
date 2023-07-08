import { ConfigEnv, defineConfig, loadEnv } from 'vite'
import alias from './vite/alias'
import { parseEnv } from './vite/util'
import setupPlugins from './vite/plugins'
import { visualizer } from 'rollup-plugin-visualizer'

export default ({ command, mode }: ConfigEnv) => {
	const isBuild = command == 'build'
	const root = process.cwd()
	const env = parseEnv(loadEnv(mode, root))
	return {
		plugins: [...setupPlugins(isBuild, env), visualizer()],
		resolve: {
			alias,
		},
		server: {
			host: env.VITE_HOST, // ip地址
			port: env.VITE_PORT, //端口号
			open: false,
			proxy: {
				'/api': {
					// 将/api访问转换为target
					target: env.VITE_MOCK_ENABLE ? '/api' : env.VITE_API_URL,
					// 跨域请求携带cookie
					changeOrigin: true,
					// url 重写删除`/api`
					rewrite: (path: string) => path.replace(/^\/api/, ''),
				},
			},
		},
		build: {
			rollupOptions: {
				emptyOutDir: true,
				output: {
					manualChunks(id: string) {
						if (id.includes('node_modules')) {
							return id.toString().split('node_modules/')[1].split('/')[0].toString()
						}
					},
				},
			},
		},
	}
}
