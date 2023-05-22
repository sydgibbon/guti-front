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
  getComputersCount: () => {
    return computersRepository.getComputersCount();
  },
  getComputersByStates: () => {
    return computersRepository.getComputersByStates();
  },

  getComputersByComputertypes: () => {
    return computersRepository.getComputersByComputertypes();
  },
  getComputersByManufacturers: () => {
    return computersRepository.getComputersByManufacturers();
  },
};
