import { Plugin } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver, VueUseComponentsResolver } from 'unplugin-vue-components/resolvers'

export default function autoImport(plugins: Plugin[]) {
	plugins.push(
		AutoImport({
			resolvers: [ElementPlusResolver()],
			//引入element plus自动api支持
			imports: ['vue', 'vue-router', '@vueuse/core'],
			//composables目录文件按需加载
			dirs: ['src/composables'],
			//为true时在项目根目录自动创建
			dts: 'types/auto-imports.d.ts',
		}),
		Components({
			resolvers: [
				ElementPlusResolver(),
				VueUseComponentsResolver()
			],
			//自动加载的组件目录，默认值为 ['src/components']
			dirs: ['src/components'],
			//组件名称包含目录，防止同名组件冲突
			directoryAsNamespace: true,
			//指定类型声明文件，为true时在项目根目录创建
			dts: 'types/components.d.ts',
		}),
	)
}
