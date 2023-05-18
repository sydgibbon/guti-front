import http from "../services/api/http";

export const autoupdatesystemsRepository = {
  getAutoupdatesystemsSelect: async () => {
    const response = await http.get("getAutoupdatesystemsSelect");

    return response;
  },
};
