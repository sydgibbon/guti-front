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

        const response = await axiosPrivate.post( BASE_URL + asset + '/', assetData, {
            headers: { Authorization: `Token ${TOKEN}`,
            "Content-Type": "multipart/form-data", },
          });
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function isDeletedAsset (asset) {
    try {

        axiosPrivate.delete( BASE_URL + asset + '/3', {
            headers: { Authorization: `Token ${TOKEN}`}});
    } catch (e) {
        console.log(e)
    }
}

export async function deleteAsset (asset, assetData) {
    try {

        const response = await axiosPrivate.put( BASE_URL + asset + '/', assetData, {
            headers: { Authorization: `Token ${TOKEN}`,
            "Content-Type": "multipart/form-data", },
          });
        return response
    } catch (e) {
        console.log(e)
    }
}