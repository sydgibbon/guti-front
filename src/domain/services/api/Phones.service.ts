import { phonesRepository } from "../../repositories/phones.repository";

export const phonesService = {
  getAllphones: () => {
    return phonesRepository.getAllPhones();
  },
};
