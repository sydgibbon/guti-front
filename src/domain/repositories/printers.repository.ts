import { PrinterDTO } from "../dto/PrinterDTO";
import http from "../services/api/http";

export const printersRepository = {
  getAllPrinters: async () => {
    const response = await http.get<PrinterDTO>("getPrinters/");    

    return response.data;
  },
};
