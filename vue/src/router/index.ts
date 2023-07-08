/**
 * @description: 路由配置
 * @author: 斑马兽
 */
import { App } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import aotoload from './autoload'
import guard from './guard'
import userStore from '@/store/userStore'

const router = createRouter({
	history: createWebHistory(),
	routes: [...routes],
})

export async function setupRouter(app: App) {
	await userStore().getUserInfo()
	aotoload(router)
	guard(router)
	app.use(router)
}

export default router
