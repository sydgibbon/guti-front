import { PhoneDTO } from "../dto/PhoneDTO";
import http from "../services/api/http";

export const phonesRepository = {
  getAllPhones: async () => {
    const response = await http.get<PhoneDTO>("getPhones/");

    return response.data;
  },
};
