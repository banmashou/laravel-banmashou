/**
 * @description: IconPark
 * @author: 斑马兽
 * @export
 * @param {App} app
 */
import { App } from 'vue'
import { install } from '@icon-park/vue-next/es/all'

export default function setupIconPark(app: App) {
  install(app)
}
