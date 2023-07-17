import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/api/";

export const authService = {
  login: (username:string, password:string) => {
    return axios
      .post(BASE_URL + "token/", {
        username,
        password
      }).then(response => {
        
        if (response.data.access) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response.data;
      })
  },

  logout: () => {
    localStorage.removeItem("user");
  },

  register: (username:string, email:string, password:string) => {
    return axios.post(BASE_URL + "signup", {
      username,
      email,
      password
    });
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user') as string);;
  },

  isAuthorized: () => {
    return (localStorage.getItem("user") !== null)
  },

};

