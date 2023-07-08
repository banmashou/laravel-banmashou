/**
 * @description: 左侧菜单
 * @author: 斑马兽
 */
import { IMenu } from "#/menu";
import { CacheEnum } from "@/enum/cacheEnum";
import router from "@/router";
import utils from "@/utils";
import store from "@/utils/store";
import { ref } from "vue";
import { RouteLocationNormalized, RouteLocationNormalizedLoaded, RouteRecordRaw } from "vue-router";

class Menu {
	public menus = ref<IMenu[]>([])
	public history = ref<IMenu[]>([])
	public close = ref(store.get(CacheEnum.MENU_IS_CLOSE) ?? true)
	public route = ref(null as null | RouteLocationNormalized)
	constructor() {
		this.menus.value = this.getMenuByRoute()
		this.history.value = this.getHistoryMenu()
	}

	private getHistoryMenu() {
		const routes = [] as RouteRecordRaw[]
		router.getRoutes().map(r => routes.push(...r.children))

		let menus: IMenu[] = utils.store.get(CacheEnum.HISTORY_MENU) ?? []
		return menus.filter(m => {
			return routes.some(r => r.name == m.route)
		})
	}

	// 移除历史菜单
	removeHistoryMenu(menu: IMenu) {
		const index = this.history.value.indexOf(menu)
		this.history.value.splice(index, 1)
		utils.store.set(CacheEnum.HISTORY_MENU, this.history.value)
	}

	// 添加历史菜单
	addHistoryMenu(route: RouteLocationNormalized) {
		if (!route.meta?.menu) return
		this.route.value = route
		const menu: IMenu = { ...route.meta?.menu, route: route.name as string }
		const isHas = this.history.value.some(menu => menu.route == route.name)
		if (!isHas) this.history.value.unshift(menu)
		if (this.history.value.length > 10) {
			this.history.value.pop()
		}
		utils.store.set(CacheEnum.HISTORY_MENU, this.history.value)
	}

	// 切换菜单
	toggleParentMenu(menu: IMenu) {
		this.menus.value.forEach(m => {
			m.isClcik = false
			if (m == menu) m.isClcik = true
		})
	}

	// 关闭菜单
	toggleState() {
		this.close.value = !this.close.value
		store.set(CacheEnum.MENU_IS_CLOSE, this.close.value)
	}

	// 点击菜单
	setCurrentMenu(route: RouteLocationNormalizedLoaded) {
		this.menus.value.forEach(m => {
			m.isClcik = false
			m.children?.forEach(c => {
				c.isClcik = false
				if (c.route === route.name) {
					m.isClcik = true
					c.isClcik = true
				}
			})
		})
	}

	// 根据路由获取菜单
	getMenuByRoute() {
		return router.getRoutes()
			.filter(route => route.children.length && route.meta.menu)
			.map(route => {
				let menu: IMenu = { ...route.meta?.menu }
				menu.children = route.children.filter(route => route.meta?.menu)
					.map(route => {
						return { ...route.meta?.menu, route: route.name }
					}) as IMenu[]
				return menu
			})
			.filter(menu => menu.children?.length)
	}
}

export default new Menu()
