import { SoftwareDTO } from "../dto/SoftwareDTO";
import http from "../services/api/http";

export const softwaresRepository = {
  getAllSoftwares: async () => {
    const response = await http.get<SoftwareDTO>("getSoftwares/");

    return response.data;
  },

  getSoftwaresCount: async () => {
    const response = await http.get("getSoftwaresCount/");

    return response.data;
  },

  getSoftwarelicensesCount: async () => {
    const response = await http.get("getSoftwarelicensesCount/");

    return response.data;
  },
};
