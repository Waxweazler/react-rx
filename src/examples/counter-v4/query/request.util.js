import axios from 'axios';

const endpoint = 'http://localhost:5000/counter';

export const dataApi = {
    fetch: () => axios.get(endpoint).then(resp => resp.data),
    increment: () => axios.put(`${endpoint}/increment`),
    decrement: () => axios.put(`${endpoint}/decrement`)
};
