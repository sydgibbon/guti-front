import http from "../services/api/http";

export const simcardsRepository = {
  getAllSimcards: async () => {
    const response = await http.get<any>("getDevicesimcards/");

    return response.data;
  },
  getDevicesimcardsSelect: async () => {
    const response = await http.get<any>("getDevicesimcardsSelect/");

    return response.data;
  },
  getLinesSelect: async () => {
    const response = await http.get<any>("getLinesSelect/");

    return response.data;
  },
};