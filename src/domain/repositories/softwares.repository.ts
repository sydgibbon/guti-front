import { SoftwareDTO } from "../dto/SoftwareDTO";
import { SoftwareData } from "../models/forms/SoftwareData";
import http from "../services/api/http";

export const softwaresRepository = {
  createSoftware: async (body: SoftwareData) => {
    const response = await http.post<SoftwareDTO>("createSoftware/", body);

    return response;
  },

  editSoftware: async (body: SoftwareData, id: number) => {
    const response = await http.put<SoftwareDTO>(`softwares/${id}/`, body);

    return response;
  },

  getAllSoftwares: async () => {
    const response = await http.get<SoftwareDTO>("getSoftwares/");

    return response.data;
  },
  getSoftwarecategoriesSelect: async () => {
    const response = await http.get<SoftwareDTO>(
      "getSoftwarecategoriesSelect/"
    );

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

  getSoftwareById: async (id: number) => {
    const response = await http.get("getSoftwaresById/" + id + "/");

    return response.data;
  },
};
