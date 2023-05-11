
import { CableDTO } from "../dto/CableDTO";
import http from "../services/api/http";

export const cablesRepository = {
  getAllCables: async () => {
    const response = await http.get<CableDTO>("getCables/");

    return response.data;
  },
};
