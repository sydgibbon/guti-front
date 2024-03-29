import { PhoneData } from "../../models/forms/PhoneData";
import { phonesRepository } from "../../repositories/phones.repository";

export const phonesService = {
  createPhone: (body: PhoneData) => {
    return phonesRepository.createPhone(body);
  },
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
