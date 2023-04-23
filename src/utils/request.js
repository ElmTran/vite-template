import axios from "axios";
import { ElMessage } from "element-plus";
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 5000
}); 

// request interceptor
// todo: add a request interceptor

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