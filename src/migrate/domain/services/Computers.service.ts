import { ComputerDTO } from "../../infrastructure/http/dto/ComputerDTO";
import { computersRepository } from "../../infrastructure/repositories/computers.repository";

export const computersService = {
  createComputer: (body: ComputerDTO) => {
    return computersRepository.createComputer(body);
  },
};
