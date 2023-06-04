import { ComputerDTO } from "../dto/ComputerDTO";
import http from "../services/api/http";

export const computersRepository = {
  createComputer: async (body: ComputerDTO) => {
    const response = await http.post<ComputerDTO>("computers/", body);

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
