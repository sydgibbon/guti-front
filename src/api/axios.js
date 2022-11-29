import axios from 'axios';
export const BASE_URL = 'http://127.0.0.1:8000/api/assets/';
const TOKEN = 'fe2cd32a6c7b8f8d28a505ef574c971ae8045a7f';

export default axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${TOKEN}` }
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { Authorization: `Token ${TOKEN}` }
});

export async function saveAsset (asset, assetData) {
    try {
        const response = await axios({
            url: BASE_URL + asset ,
            method: 'POST',
            data: assetData
        })
        return response
    } catch (e) {
        console.log(e)
    }
}