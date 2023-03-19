import { cablesRepository } from "../repositories/cables.repository";

export const cablesService = {
  getAllCables: () => {
    return cablesRepository.getAllCables();
  },
};
