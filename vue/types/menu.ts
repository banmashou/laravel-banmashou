import { IconType } from '@icon-park/vue-next/es/all'

/**
 * 定义菜单类型
 * @author: 斑马兽
 * @interface Menu
 */
interface Menu {
  title?: string
  icon?: IconType
  isClcik?: boolean
  route?: string
}

export interface IMenu extends Menu {
  children?: Menu[]
}
