import http from "../http/http";

export const cablesRepository = {
  getAllCables: async () => {
    const response = await http.get<any>("cables/");

    return response.data;
  },
};
