import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gentle-temple-27938.herokuapp.com/'
})

export default api;