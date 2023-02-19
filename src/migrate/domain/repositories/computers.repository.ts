import { ComputerDTO } from "../http/dto/ComputerDTO";
import http from "../http/http";

export const computersRepository = {
  createComputer: async (body: ComputerDTO) => {
    const response = await http.post<ComputerDTO>("computers", body);

    return response;
  },
  getAllComputers: async () => {
    const response = await http.get<ComputerDTO>("computers/");    

    return response.data;
  },
};
