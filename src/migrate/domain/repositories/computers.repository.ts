import { CreateComputer } from "../../infrastructure/components/forms/Computer/types";
import { ComputerDTO } from "../dto/ComputerDTO";
import http from "../http/http";

export const computersRepository = {
  createComputer: async (body: CreateComputer) => {
    const response = await http.post<CreateComputer>("computers/", body);

    return response;
  },
  getAllComputers: async () => {
    const response = await http.get<ComputerDTO>("computers/");

    return response.data;
  },
};
