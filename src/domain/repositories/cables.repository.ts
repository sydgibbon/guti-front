import { CableDTO } from "../dto/CableDTO";
import { CableData } from "../models/forms/CableData";
import http from "../services/api/http";

export const cablesRepository = {
  createCable: async (body: CableData) => {
    const response = await http.post<CableDTO>("createCable/", body);

    return response;
  },
  editCable: async (body: CableData, id: number) => {
    const response = await http.put<CableDTO>(`updateCableById/${id}/`, body);

    return response;
  },
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
