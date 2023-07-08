/**
 * @constructor: 自动加载模块路由
 * @author: 斑马兽
 * @export
 * @return {*} 
 */
import { RouteRecordRaw } from "vue-router";

export default function autoloadModuleRoutes() {
	const modules: Record<string, any> = import.meta.glob("../module/**/*.ts", { eager: true });

	const routes = [] as RouteRecordRaw[];
	Object.keys(modules).forEach((key) => {
		routes.push(modules[key].default)
	})

	return routes
}
