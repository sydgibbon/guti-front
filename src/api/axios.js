import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api/assets/';
const TOKEN = 'b7ef9e2b5b33777aba819fbe2d375bfa93db5923';

export default axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${TOKEN}` }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${TOKEN}` }
});