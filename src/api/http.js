import axios from 'axios'

var baseUrl = 'http://localhost:9091/';
export {
    baseUrl,
}

// axios的基础知识  api

// axios的全局配置

axios.defaults.timeout = 4000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'


// 封装get请求
export const get = (url, params, headers) => {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            headers: headers,
            params: params
        }).then(res => {
            resolve(res.data)
        }).catch(err => {
            reject(err)
        })
    })
}

export const myget = (type, url) => {
    return new Promise((resolve, reject) => {
        axios({
            method: type,
            url: url
        }).then((res) => {
            resolve(res);
        }).catch(err => {
            reject(err);
        })
    })
}





