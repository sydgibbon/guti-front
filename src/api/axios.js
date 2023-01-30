import axios from "axios";
export const BASE_URL = "http://127.0.0.1:8000/api/assets/";
const TOKEN = "fe2cd32a6c7b8f8d28a505ef574c971ae8045a7f";

export default axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${TOKEN}` },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${TOKEN}` },
});

export async function saveAsset(asset, assetData) {
  try {
    const response = await axiosPrivate.post(
      BASE_URL + asset + "/",
      assetData,
      {
        headers: {
          Authorization: `Token ${TOKEN}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response;
  } catch (e) {
    console.log(e);
  }
}

export async function deleteAsset (asset, assetData) {
    try {

        const response = await axiosPrivate.delete( BASE_URL + asset + '/', assetData, {
            headers: { Authorization: `Token ${TOKEN}`,
            "Content-Type": "multipart/form-data", },
          });
        return response
    } catch (e) {
        console.log(e)
    }
}

export async function isDeletedAsset (asset, assetData) {
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
export async function getAssetById(asset, id ,setData) {
  try {
    console.log(BASE_URL + asset + "/" + id + "/"); 
    await axiosPrivate
      .get(BASE_URL + asset + "/" + id + "/")
      .then((response) => {
        console.log(response.data)
        setData(response.data)
      });
  } catch (e) {
    console.log(e);
  }
}

export async function userLogin(user) {
  return await axiosPrivate.post('http://127.0.0.1:8000/api/assets/login/', user)
}
