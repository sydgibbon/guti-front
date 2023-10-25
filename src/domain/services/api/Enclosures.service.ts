import { enclosuresRepository } from "../../repositories/enclosures.repository";
import { EnclosureData } from "../../models/forms/EnclosureData";

export const enclosuresService = {
  createEnclosure: (body: EnclosureData) => {
    return enclosuresRepository.createEnclosure(body);
  },
  editEnclosure: (body: EnclosureData, id: number) => {
    return enclosuresRepository.editEnclosure(body, id);
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
