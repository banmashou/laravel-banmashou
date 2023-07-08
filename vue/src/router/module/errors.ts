/**
 * @description 错误页面路由
 * @author 斑马兽
 */
import { RouteRecordRaw } from 'vue-router'

export default {
  name: 'error',
  path: '/error',
  component: () => import('@/layouts/admin.vue'),
  meta: { auth: true, menu: { title: '错误页面', icon: 'Caution' } },
  children: [
    {
      name: 'error.404',
      path: '404',
      component: () => import('@/views/errors/404.vue'),
      meta: { menu: { title: '404' } },
    },
    {
      name: 'error.403',
      path: '403',
      component: () => import('@/views/errors/403.vue'),
      meta: { menu: { title: '403' } },
    },
    {
      name: 'error.500',
      path: '500',
      component: () => import('@/views/errors/500.vue'),
      meta: { menu: { title: '500' } },
    },
  ],
} as RouteRecordRaw
