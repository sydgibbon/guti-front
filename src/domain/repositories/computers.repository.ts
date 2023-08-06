import { ComputerDTO } from "../dto/ComputerDTO";
import { ComputerData } from "../models/forms/ComputerData";
import http from "../services/api/http";

export const computersRepository = {
  createComputer: async (body: ComputerData) => {
    const response = await http.post<ComputerDTO>("createComputer/", body);

    return response;
  },
  getAllComputers: async () => {
    const response = await http.get<ComputerDTO>("getComputers/");

    return response.data;
  },

  getComputersCount: async () => {
    const response = await http.get("getComputersCount/");

    return response.data;
  },

  getComputersByStates: async () => {
    const response = await http.get("getComputersByStates/");

    return response.data;
  },

  getComputersByComputertypes: async () => {
    const response = await http.get("getComputersByComputertypes/");

    return response.data;
  },

  getComputersByManufacturers: async () => {
    const response = await http.get("getComputersByManufacturers/");

    return response.data;
  },
  getComputertypesSelect: async () => {
    const response = await http.get<ComputerDTO>("getComputertypesSelect/");

    return response.data;
  },
  getComputermodelsSelect: async () => {
    const response = await http.get<ComputerDTO>("getComputermodelsSelect/");

    return response.data;
  },
};
