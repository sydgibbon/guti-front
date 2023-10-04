import { CableData } from "../../models/forms/CableData";
import { cablesRepository } from "../../repositories/cables.repository";

export const cablesService = {
  createCable: (body: CableData) => {
    return cablesRepository.createCable(body);
  },
  editCable: (body: CableData, id: number) => {
    return cablesRepository.editCable(body, id);
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
