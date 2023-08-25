import { CableData } from "../../models/forms/CableData";
import { cablesRepository } from "../../repositories/cables.repository";

export const cablesService = {
  createCable: (body: CableData) => {
    return cablesRepository.createCable(body);
  },
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
