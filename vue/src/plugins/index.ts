/**
 * @deprecated 插件注册
 * @author 斑马兽
 * @export
 * @param {App} app
 */
import { App } from 'vue'
import { setupTailwindcss } from './tailwindcss'
import _ from 'lodash'
import setupElementPlus from './elementui'
import setupPinia from './pinia'
import setupIconPark from './iconpark'

export function setupPlugins(app: App) {
  // autoRegisterComponent(app)
  setupTailwindcss()
  setupElementPlus()
  setupPinia(app)
  setupIconPark(app)
}

// 自动注册全局组件
// function autoRegisterComponent(app: App) {
//   const compoents: Record<string, any> = import.meta.glob('../components/form/*.vue', { eager: true })
//   Object.keys(compoents).forEach((key) => {
//     const name = key.split('/').pop()?.split('.').shift() as string
//     app.component(_.camelCase(name), compoents[key].default)
//   })
// }
