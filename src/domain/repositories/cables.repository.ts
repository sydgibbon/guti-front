
import { CableDTO } from "../dto/CableDTO";
import http from "../services/api/http";

export const cablesRepository = {
  getAllCables: async () => {
    const response = await http.get<CableDTO>("getCables/");

    return response.data;
  },
  getCabletypesSelect: async () => {
    const response = await http.get<CableDTO>("getCabletypesSelect/");

    return response.data;
  },
  getCablestrandsSelect: async () => {
    const response = await http.get<CableDTO>("getCablestrandsSelect/");

    return response.data;
  },
  getSocketmodelsSelect: async () => {
    const response = await http.get<CableDTO>("getSocketmodelsSelect/");

    return response.data;
  },
  getSocketsSelect: async () => {
    const response = await http.get<CableDTO>("getSocketsSelect/");

    return response.data;
  },
};
