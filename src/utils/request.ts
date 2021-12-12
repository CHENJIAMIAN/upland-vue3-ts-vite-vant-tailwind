import axios from 'axios';
const baseURL = '/api';
const requestTimeout = 10000;

const instance = axios.create({
    baseURL,
    timeout: requestTimeout,
    headers: {
        // "Content-Type": "application/json;charset=UTF-8"
        // Authorization: `Bearer ${token}`,
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = window.localStorage.getItem('token');
        if (token) {
            // 判断是否存在token，如果存在的话，则每个http header都加上token
            // Bearer是JWT的认证头部信息
            config.headers.common['Authorization'] = 'Bearer ' + token;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
instance.interceptors.response.use(
    (response) => {
        const res = response.data;
        return res;
    },
    (error) => {
        const { response } = error;
        if (response && response.data) {
            return Promise.reject(error);
        } else {
            const { message } = error;
            console.log(message);
            return Promise.reject(error);
        }
    }
);

export default instance;
