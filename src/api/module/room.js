// 导入封装的方法
import { get } from "../http";
import { myget } from "../http";


// export const getlog = params => get('', params) //??


const room = {
    roomAll() { // 获取所有房间
        return myget('get','http://localhost:9091/room/all')
    },
}

export default room;