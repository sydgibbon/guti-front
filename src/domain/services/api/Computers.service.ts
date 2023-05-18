import { ComputerDTO } from "../../dto/ComputerDTO";
import { computersRepository } from "../../repositories/computers.repository";

export const computersService = {
  createComputer: (body: ComputerDTO) => {
    return computersRepository.createComputer(body);
  },
  getAllComputers: () => {
    return computersRepository.getAllComputers();
  },
  getComputertypesSelect: () => {
    return computersRepository.getComputertypesSelect();
  },
  getComputermodelsSelect: () => {
    return computersRepository.getComputermodelsSelect();
  },
};
