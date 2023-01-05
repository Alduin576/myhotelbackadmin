// home路由下的所有组件


const home = [
    {
        path: '/home',
        name: 'home',
        component: () => import('@/views/home/home'),
    },
]

export default home