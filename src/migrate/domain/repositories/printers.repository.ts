import { PrinterDTO } from "../dto/PrinterDTO";
import http from "../http/http";

export const printersRepository = {
  getAllPrinters: async () => {
    const response = await http.get<PrinterDTO>("printers/");    

    return response.data;
  },
};
