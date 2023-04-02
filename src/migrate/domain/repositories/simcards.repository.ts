import http from "../http/http";

export const simcardsRepository = {
  getAllSimcards: async () => {
    const response = await http.get<any>("devicesimcards/");

    return response.data;
  },
};