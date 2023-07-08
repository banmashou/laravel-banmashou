/**
 * @description: 获取路由
 * @author: 斑马兽
 * @param {RouteRecordRaw[]} routes
 * @return {*}
 * @example: getRoutes()
 */
import { RouteRecordRaw } from "vue-router";

// 获取 layouts 文件夹下所有 .vue 文件
// import.meta.globEager 已经弃用
// const layouts = import.meta.globEager('../layouts/*.vue')
// 当约束索引类型时可以使用Record<string,any>来代替object，Record<string,any>创建了一个key为string类型，值为任意类型的索引类型
const layouts: Record<string, any> = import.meta.glob("../layouts/*.vue", { eager: true });
const views: Record<string, any> = import.meta.glob("../views/**/*.vue", { eager: true });
// console.log(views)

function getRoutes() {
	const layoutRoutes = [] as RouteRecordRaw[];

	Object.entries(layouts).forEach(([file, module]) => {
		const route = getRouteByModule(file, module);
		route.children = getChildrenRoutes(route);
		layoutRoutes.push(route);
	});

	return layoutRoutes;
}

// 获取布局路由的子路由
function getChildrenRoutes(layoutRoute: RouteRecordRaw) {
	const routes = [] as RouteRecordRaw[];

	Object.entries(views).forEach(([file, module]) => {
		if (file.includes(`../views/${layoutRoute.name as string}`)) {
			const route = getRouteByModule(file, module);
			routes.push(route);
		}
	});

	return routes;
}

// 获取路由
function getRouteByModule(file: string, module: { [key: string]: any }) {
	// console.log(file.split('/').pop()?.split('.')[0])
	// console.log(file.match(/\.\.\/layouts\/(?<name>.+?)\.vue/i)?.groups?.name)
	const name = file.replace(/.+layouts\/|.+views\/|\.vue/gi, "");

	const route = {
		name: name.replace("/", "."),
		path: `/${name}`,
		component: module.default,
	} as RouteRecordRaw;

	return Object.assign(route, module.default?.route);
}
// 如果开启了自动加载路由，则调用getRoutes()获取路由，否则返回空数组
// console.log(typeof util.env.VITE_ROUTER_AUTOLOAD);
// const routes = env.VITE_ROUTER_AUTOLOAD ? getRoutes() : ([] as RouteRecordRaw[]);
export default getRoutes
