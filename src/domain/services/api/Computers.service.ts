import { ComputerDTO } from "../../dto/ComputerDTO";
import { computersRepository } from "../../repositories/computers.repository";

export const computersService = {
  createComputer: (body: ComputerDTO) => {
    return computersRepository.createComputer(body);
  },
  getAllComputers: () => {
    return computersRepository.getAllComputers();
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
