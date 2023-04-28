import { enclosuresRepository } from "../repositories/enclosures.repository";

export const enclosuresService = {
  getAllEnclosures: () => {
    return enclosuresRepository.getAllEnclosures();
  },
};
