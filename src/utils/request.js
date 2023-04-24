import axios from "axios";
import { ElMessage } from "element-plus";
import { getToken } from '@/utils/auth'
const service = axios.create({
    baseURL: import.meta.env.BASE_URL,
    timeout: 5000
}); 

// request interceptor
// todo: add a request interceptor
service.interceptors.request.use(
    config => {
        const token = getToken();
        if (token) {
            config.headers['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const { status_code, data, message } = response.data;
        if (status_code === 200 || status_code === 201) {
            return data;
        } else {
            ElMessage.error(message);
            return Promise.reject(new Error(message || "Error"));
        }
    },
    error => {
        error.response && ElMessage.error(error.response.data.message);
        return Promise.reject(new Error(error.response.data || "Error"));
    }
);

export default service;