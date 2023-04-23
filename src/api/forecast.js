import request from '@/utils/request'

export function forecast(data) {
    return request({
        url: '/forecast',
        method: 'post',
        data
    })
}

export function queryResult(id) {
    return request({
        url: `/result/${id}`,
        method: 'get',
    })
}