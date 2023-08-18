import { enclosuresRepository } from "../../repositories/enclosures.repository";
import { EnclosureData } from "../../models/forms/EnclosureData";

export const enclosuresService = {
  createEnclosure: (body: EnclosureData) => {
    return enclosuresRepository.createEnclosure(body);
  },
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
