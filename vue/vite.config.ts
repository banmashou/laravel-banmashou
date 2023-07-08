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
			// host: env.VITE_HOST, // ip地址
			// port: env.VITE_PORT, //端口号
			// open: false,
			host: true,
			proxy: {
				'/api': {
					target: env.VITE_API_URL,
					changeOrigin: true,
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
