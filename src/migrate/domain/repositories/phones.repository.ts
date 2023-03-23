import { PhoneAdapter } from "../adapter/PhoneAdapter";
import { PhoneDTO } from "../dto/PhoneDTO";
import http from "../http/http";

export const phonesRepository = {
  getAllPhones: async (): Promise<PhoneAdapter[]> => {
    const response = await http.get<PhoneDTO[]>("phones/");

    return response.data.map((phone) => ({
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
