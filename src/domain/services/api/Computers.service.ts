import { ComputerData } from "../../models/forms/ComputerData";
import { computersRepository } from "../../repositories/computers.repository";

export const computersService = {
  createComputer: (body: ComputerData) => {
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
  getComputerById: (id: number) => {
    return computersRepository.getComputerById(id);
  },
};
