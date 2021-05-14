import axios, {AxiosRequestConfig, AxiosResponse} from 'axios';

const client = axios.create({
    baseURL: 'http://localhost:5000'
});

const request = (options: AxiosRequestConfig) => {
    const onSuccess = (response: AxiosResponse) => {
        console.debug('request successful!', response);
        return response.data;
    };
    return client(options).then(onSuccess);
};

export const CounterAPI = {
    fetch: () => request({method: 'get', url: '/counter'}),
    increment: () => request({method: 'put', url: '/counter/increment'}),
    decrement: () => request({method: 'put', url: '/counter/decrement'})
};
