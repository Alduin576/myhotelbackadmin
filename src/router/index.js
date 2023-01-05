import Vue from 'vue'
import VueRouter from 'vue-router'

// import generalList from './module'
const files = require.context('./module', false, /\.js$/)
var pages = []
files.keys().forEach(key => {
  pages = pages.concat(files(key).default)//Array concat可以将新内容添加到数组中，返回新增加的数组
})

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
    children: pages,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
