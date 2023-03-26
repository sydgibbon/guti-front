import { CableDTO } from "../dto/CableDTO";
import http from "../http/http";

export const cablesRepository = {
  getAllCables: async () => {
    const response = await http.get<CableDTO>("cables/");

    return response.data;
  },
};
