import { PdusDTO } from "../dto/PdusDTO";
import http from "../http/http";

export const pdusRepository = {
  getAllPdus: async () => {
    const response = await http.get<PdusDTO>("pdus/");    

    return response.data;
  },
};