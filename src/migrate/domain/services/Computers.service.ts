import { CreateComputer } from "../../infrastructure/components/forms/Computer/types";
import { computersRepository } from "../repositories/computers.repository";

export const computersService = {
  createComputer: (body: CreateComputer) => {
    return computersRepository.createComputer(body);
  },
  getAllComputers: () => {
    return computersRepository.getAllComputers();
  },
};
