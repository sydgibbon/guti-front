import { PhoneDTO } from "../dto/PhoneDTO";
import http from "../http/http";

export const cablesRepository = {
  getAllCables: async (): Promise<PhoneDTO[]> => {
    const response = await http.get<PhoneDTO[]>("cables/");

    return response.data;
  },
};
