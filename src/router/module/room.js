//

const room = [
    {
        path: '/roomTotal',
        name: 'room',
        alias: 'roomManagement',
        component: () => import('@/views/room/roomTotal')//房间总览
    },
    {
        path: '/roomAdd',
        name: 'roomAdd',
        component: () => import('@/views/room/roomAdd')//新增房间
    },
    {
        path: 'roomUpdate',
        name: 'roomUpdate',
        component: () => import('@/views/room/roomUpdate'),//房间修改
    }

]

export default room;