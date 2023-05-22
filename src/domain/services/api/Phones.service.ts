import { phonesRepository } from "../../repositories/phones.repository";

export const phonesService = {
  getAllphones: () => {
    return phonesRepository.getAllPhones();
  },
  getPhonemodelsSelect: () => {
    return phonesRepository.getPhonemodelsSelect();
  },
  getPhonetypesSelect: () => {
    return phonesRepository.getPhonetypesSelect();
  },
  getPhonepowersuppliesSelect: () => {
    return phonesRepository.getPhonepowersuppliesSelect();
  },

  getPhonesCount: () => {
    return phonesRepository.getPhonesCount();
  },
};
