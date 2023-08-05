import request from "@/utils/axios.js"

export function getAllUser(params) {
    return request({
        url: '/user/alluser',
        method: 'get',
        params: params
    })
}

export function updateUser(data) {
    return request({
        url: '/user/update',
        method: 'post',
        data: data
    })
}

export function insertTask(data) {
    return request({
        url: '/task/insert',
        method: 'post',
        data: data
    })
}

export function getAllTask(params) {
    return request({
        url: '/task/all',
        method: 'get',
        params: params
    })
}

export function udpateTask(data) {
    return request({
        url: '/task/update',
        method: 'post',
        data: data
    })
}
