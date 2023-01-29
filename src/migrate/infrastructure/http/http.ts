import axios from "axios";

export const BASE_URL = "http://127.0.0.1:8000/api/assets/";
const TOKEN = "fe2cd32a6c7b8f8d28a505ef574c971ae8045a7f";

export default axios.create({
  baseURL: BASE_URL,
  headers: { Authorization: `Token ${TOKEN}` },
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Token ${TOKEN}`,
    "Content-Type": "multipart/form-data",
  },
});

const headers = {
  "Content-Type": "application/json",
};

const get = async <T>(url: string) => {
  const response = await axios.get(url, {
    method: "GET",
    headers,
  });
  return response as T;
};

const post = async <T>(url: string, body: any) => {
  const response = await axios.post(url, {
    method: "POST",
    headers,
    body,
  });
  return response as T;
};

const put = async <T>(url: string, body: any) => {
  const response = await axios.put(url, {
    method: "PUT",
    headers,
    body,
  });
  return response as T;
};

const _delete = async <T>(url: string) => {
  const response = await fetch(url, {
    method: "DELETE",
    headers,
  });
  return response as T;
};

export const http = {
  get,
  post,
  put,
  delete: _delete,
};
