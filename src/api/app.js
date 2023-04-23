import request from '@/utils/request'

export function queryList() {
    return request({
        url: '/list',
        method: 'get',
    })
}

export function queryDetail(id) {
    return request({
        url: `/detail/${id}`,
        method: 'get',
    })
}

export function add(data) {
    return request({
        url: '/add',
        method: 'post',
        data
    })
}