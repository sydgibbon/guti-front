import { enclosuresRepository } from "../../repositories/enclosures.repository";

export const enclosuresService = {
  getAllEnclosures: () => {
    return enclosuresRepository.getAllEnclosures();
  },
  getEnclosuremodelsSelect: () => {
    return enclosuresRepository.getEnclosuremodelsSelect();
  },

  getEnclosuresCount: () => {
    return enclosuresRepository.getEnclosuresCount();
  },
};
