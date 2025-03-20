import axios, { AxiosError, AxiosInstance, AxiosRequestConfig } from 'axios';
import { environment } from '@envs/environment';

const baseURL: string = environment._SERVICE;

const Backend_Api: AxiosInstance = axios.create({
    baseURL: baseURL
});


 Backend_Api.interceptors.request.use((config: any) => {

    const token = localStorage.getItem(environment.localStorage.token) || '';
    console.log('token', token);
    if (config.headers) {
        config.headers['Authorization'] = `Bearer ${token}`;
    } else {
        config.headers = {
            'Authorization': `Bearer ${token}`,
        };
    }
    return config;

});

Backend_Api.interceptors.response.use(
    (response) => response.data,
    (error: AxiosError) => {

        console.error(`Api - Error:`, error)
        return Promise.reject<AxiosError>(error as AxiosError);

    });

export default Backend_Api;