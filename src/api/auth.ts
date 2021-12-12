import axios from 'axios';

export const login = (payload: Object) => {
    return axios.post('/auth/jwt/login', payload);
};
