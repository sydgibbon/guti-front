import { pdusRepository } from "../../repositories/pdus.repository";

export const pdusService = {
  getAllPdus: () => {
    return pdusRepository.getAllPdus();
  },
  getPdumodelsSelect: () => {
    return pdusRepository.getPdumodelsSelect();
  },
  getPdutypesSelect: () => {
    return pdusRepository.getPdutypesSelect();
  },
};