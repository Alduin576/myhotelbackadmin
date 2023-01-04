import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const Layout = () => import('@/views/layout/layout')


const routes = [
  // {
  //   path: '/',
  //   name: '/',
  //   component: () => import('@/views/home/home')
  // }
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visite
  ,
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home'),
      },
      {
        path: '/room',
        name: 'room',
        alias: 'roomManagement',
        component: () => import('@/views/room/index')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user/index')
      },
      {
        path: '/config',
        component: () => import('@/views/config/index'),
      },
      {
        path: '/setting',
        component: () => import('@/views/setting/index'),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
