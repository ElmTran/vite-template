import router from './index'
import { getToken } from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
    const token = getToken()
    if (token && token !== 'undefined') {
        if (to.path === '/login') {
            next({ path: '/' })
        } else {
            next()
        }
    } else {
        if (whiteList.indexOf(to.path) !== -1) {
            next()
        } else {
            next(`/login?redirect=${to.path}`)
        }
    }
})