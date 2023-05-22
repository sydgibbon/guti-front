import { PdusDTO } from "../dto/PdusDTO";
import http from "../services/api/http";

export const pdusRepository = {
  getAllPdus: async () => {
    const response = await http.get<PdusDTO>("getPdus/");

    return response.data;
  },
  getPdumodelsSelect: async () => {
    const response = await http.get<PdusDTO>("getPdumodelsSelect/");

    return response.data;
  },
  getPdutypesSelect: async () => {
    const response = await http.get<PdusDTO>("getPdutypesSelect/");
    return response.data;
  },

  getPdusCount: async () => {
    const response = await http.get("getPdusCount/");

    return response.data;
  },
};
