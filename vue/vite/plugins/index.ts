import vue from '@vitejs/plugin-vue'
import { Plugin } from 'vite'
import { setupMockPlugin } from './mock'
import autoImport from './auto-import'
export default function setupPlugins(isBuild: boolean, env: ImportMetaEnv) {
	const plugins: Plugin[] = [vue()]

	plugins.push(setupMockPlugin(isBuild))

	autoImport(plugins)
	return plugins
}
