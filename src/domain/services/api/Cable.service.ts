import { cablesRepository } from "../../repositories/cables.repository";

export const cablesService = {
  getAllCables: () => {
    return cablesRepository.getAllCables();
  },
  getCabletypesSelect: () => {
    return cablesRepository.getCabletypesSelect();
  },
  getCablestrandsSelect: () => {
    return cablesRepository.getCablestrandsSelect();
  },
  getSocketmodelsSelect: () => {
    return cablesRepository.getSocketmodelsSelect();
  },
  getSocketsSelect: () => {
    return cablesRepository.getSocketsSelect();
  },
};
