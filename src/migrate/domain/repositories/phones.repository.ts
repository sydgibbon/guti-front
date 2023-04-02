import { PhoneDTO } from "../dto/PhoneDTO";
import http from "../http/http";

export const phonesRepository = {
  getAllPhones: async () => {
    const response = await http.get<PhoneDTO>("phones/");

    return response.data.map((phone) => ({
      name: phone.name,
      states: phone.states.name,
      manufacturers: phone.manufacturers.name,
      locations: phone.locations.name,
      phonetypes: phone.phonetypes.name,
      phonemodels: phone.phonemodels.name,
      date_mod: phone.date_mod,
    }));
  },
};
