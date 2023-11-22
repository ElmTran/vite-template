import axios from 'axios'
import { getToken } from '@/utils/auth'
import store from '@/store'
import { ElMessage } from 'element-plus';
import router from '@/router';


// create an axios instance
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    timeout: 5000, // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // do something before request is sent
        if (store.getters.token) {
            config.headers['Authorization'] = "Bearer " + getToken()
        }
        return config
    },
    error => {
        // do something with request error
        ElMessage({
            showClose: true,
            message: "request error",
            type: 'error',
        })
        return Promise.reject(error)
    }
)

// response interceptor

service.interceptors.response.use(
    response => {
        const {code, data, msg} = response.data
        if (code === 200 || code === 201) {
            return data
        } else {
            ElMessage({
                showClose: true,
                message: msg,
                type: 'error',
            })
            return Promise.reject(new Error(msg || 'Error'))
        }
    },
    error => {
        const res = error.response
        console.log(res)
        if (res.status.toString().startsWith('4') || res.status.toString().startsWith('5')) {
            if (res.status === 401) {
                store.dispatch('user/resetToken').then(() => {
                    // redirect login page
                    router.push('/login')
                })
            } else {
                ElMessage({
                    showClose: true,
                    message: "request error: " + res.status + " " + res.statusText,
                    type: 'error',
                })
            }
        }
        return Promise.reject(error)
    }
)

export default service