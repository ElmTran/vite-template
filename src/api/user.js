import request from '@/utils/request'

export function login(data) {
    return request({
        url: '/login',
        method: 'post',
        data
    })
}

export function logout() {
    return request({
        url: '/logout',
        method: 'post',
    })
}

export function fetchUserInfo() {
    return request({
        url: `/user/info`,
        method: 'get'
    })
}