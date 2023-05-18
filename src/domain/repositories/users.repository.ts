import http from "../services/api/http";

export const usersRepository = {
  getUserInChargeSelect: async () => {
    const response = await http.get("getUserInChargeSelect");

    return response;
  },
  getUsersSelect: async () => {
    const response = await http.get("getUsersSelect");

    return response;
  },
};
