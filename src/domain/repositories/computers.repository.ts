import { ComputerDTO } from "../dto/ComputerDTO";
import http from "../services/api/http";

export const computersRepository = {
  createComputer: async (body: ComputerDTO) => {
    const response = await http.post<ComputerDTO>("computers", body);

    return response;
  },
  getAllComputers: async () => {
    const response = await http.get<ComputerDTO>("getComputers/");    

    return response.data;
  },
};
