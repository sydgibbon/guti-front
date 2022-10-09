import axios from 'axios';
const BASE_URL = 'http://127.0.0.1:8000/api/';
const TOKEN = 'fe2cd32a6c7b8f8d28a505ef574c971ae8045a7f';

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${TOKEN}` }
});