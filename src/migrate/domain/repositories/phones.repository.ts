import { PhoneDTO } from "../dto/PhoneDTO";
import http from "../http/http";

export const phonesRepository = {
  getAllPhones: async () => {
    const response = await http.get<PhoneDTO[]>("phones/");

    return response.data;
  },
};
