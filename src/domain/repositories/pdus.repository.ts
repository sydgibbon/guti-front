import { PdusDTO } from "../dto/PdusDTO";
import http from "../services/api/http";

export const pdusRepository = {
  getAllPdus: async () => {
    const response = await http.get<PdusDTO>("getPdus/");    

    return response.data;
  },
};