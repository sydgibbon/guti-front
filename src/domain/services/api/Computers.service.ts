import { ComputerDTO } from "../../dto/ComputerDTO";
import { computersRepository } from "../../repositories/computers.repository";

export const computersService = {
  createComputer: (body: ComputerDTO) => {
    return computersRepository.createComputer(body);
  },
  getAllComputers: () => {
    return computersRepository.getAllComputers();
  },
};
