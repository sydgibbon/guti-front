import { EnclosureDTO } from "../dto/EnclosureDTO";
import http from "../services/api/http";

export const enclosuresRepository = {
  getAllEnclosures: async () => {
    const response = await http.get<EnclosureDTO>("getEnclosures/");

    return response.data;
  },
  getEnclosuremodelsSelect: async () => {
    const response = await http.get<EnclosureDTO>("getEnclosuremodelsSelect/");
    return response.data;
  },

  getEnclosuresCount: async () => {
    const response = await http.get("getEnclosuresCount/");

    return response.data;
  },
};