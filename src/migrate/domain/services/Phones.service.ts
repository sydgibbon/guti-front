import { PhoneAdapter } from "../adapter/PhoneAdapter";
import { phonesRepository } from "../repositories/phones.repository";

export const phonesService = {
  getAllphones: async (): Promise<PhoneAdapter[]> => {
    return await phonesRepository.getAllPhones();
  },
};
