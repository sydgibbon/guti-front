import axios from "axios";
import authHeader from "./Authheader";

export const BASE_URL = "http://127.0.0.1:8000/api/assets";

const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: authHeader(),
});

const refreshAccessToken = async () => {
  const user = JSON.parse(localStorage.getItem("user") as string);
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/token/refresh/",
      {
        refresh: user?.refresh,
      }
    );
    const newAccessToken = response.data.access;
    user.access = newAccessToken;
    localStorage.setItem("user", JSON.stringify(user));

    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

axiosPrivate.interceptors.request.use(function (config) {
  const token = JSON.parse(localStorage.getItem("user") as string);
  if (config.headers !== undefined) {
    config.headers.Authorization = token ? `Bearer ${token.access}` : "";
  }
  return config;
});

axiosPrivate.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 403) {
      if (!error.config._retry) {
        error.config._retry = true;
        try {
          const prevRequest = error?.config;
          const newAccessToken = await refreshAccessToken();

          return axiosPrivate({
            ...prevRequest,
            headers: {
              ...prevRequest.headers,
              Authorization: `Bearer ${newAccessToken}`,
            },
            sent: true,
          });
        } catch (refreshError) {
          localStorage.removeItem("user");
          window.location.href = "/login";
          return Promise.reject(refreshError);
        }
      } else {
        localStorage.removeItem("user");
        window.location.href = "/login";
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const headers = {
  "Content-Type": "application/json",
};

const get = async <T>(url: string) => {
  const response = await axiosPrivate.get(`${BASE_URL}/${url}`, {
    method: "GET",
    headers,
  });
  return response.data as T;
};

const post = async <T>(url: string, body: any) => {
  const response = await axiosPrivate.post(`${BASE_URL}/${url}`, {
    method: "POST",
    body,
    headers,
  });
  return response.data as T;
};

const put = async <T>(url: string, body: any) => {
  const response = await axiosPrivate.put(`${BASE_URL}/${url}`, {
    method: "PUT",
    headers,
    body,
  });
  return response.data as T;
};

const _delete = async <T>(url: string) => {
  const response = await fetch(`${BASE_URL}/${url}`, {
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

export default axiosPrivate;
