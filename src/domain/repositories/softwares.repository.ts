import { SoftwareDTO } from "../dto/SoftwareDTO";
import http from "../services/api/http";

export const softwaresRepository = {
  getAllSoftwares: async () => {
    const response = await http.get<SoftwareDTO>("getSoftwares/");

    return response.data;
  },
};