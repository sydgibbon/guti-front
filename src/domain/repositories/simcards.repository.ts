import { SimCardsDTO } from "../dto/SimCardsDTO";
import { SimCardData } from "../models/forms/SimCardData";
import http from "../services/api/http";

export const simcardsRepository = {
  createSimCard: async (body: SimCardData) => {
    const response = await http.post<SimCardsDTO>("createDevicesimcard/", body);

    return response;
  },
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