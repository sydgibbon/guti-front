import { PhoneAdapter } from "../adapter/PhoneAdapter";
import { phonesRepository } from "../repositories/phones.repository";

export const phonesService = {
  getAllphones: async (): Promise<PhoneAdapter[]> => {
    const phones = await phonesRepository.getAllPhones();

    return phones.map((phone) => ({
      name: phone.name,
      states: phone.states.name,
      manufacturers: phone.manufacturers.name,
      locations: phone.locations.name,
      phonetypes: phone.phonetypes.name,
      phonemodels: phone.phonemodels.name,
      last_inventory_update: phone.last_inventory_update,
    }));
  },
};
