import { PdusDTO } from "../dto/PdusDTO";
import { PduData } from "../models/forms/PduData";
import http from "../services/api/http";

export const pdusRepository = {
  createPdu: async (body: PduData) => {
    const response = await http.post<PdusDTO>("createPdu/", body);

    return response;
  },
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
