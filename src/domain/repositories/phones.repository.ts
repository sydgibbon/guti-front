import { PhoneDTO } from "../dto/PhoneDTO";
import http from "../services/api/http";

export const phonesRepository = {
  getAllPhones: async () => {
    const response = await http.get<PhoneDTO>("getPhones/");

    return response.data;
  },
  getPhonetypesSelect: async () => {
    const response = await http.get<PhoneDTO>("getPhonetypesSelect/");

    return response.data;
  },
  getPhonemodelsSelect: async () => {
    const response = await http.get<PhoneDTO>("getPhonemodelsSelect/");

    return response.data;
  },
  getPhonepowersuppliesSelect: async () => {
    const response = await http.get<PhoneDTO>("getPhonepowersuppliesSelect/");
    return response.data;
  },

  getPhonesCount: async () => {
    const response = await http.get("getPhonesCount/");

    return response.data;
  },
};
