import { PrinterDTO } from "../dto/PrinterDTO";
import http from "../services/api/http";

export const printersRepository = {
  getAllPrinters: async () => {
    const response = await http.get<PrinterDTO>("getPrinters/");    

    return response.data;
  },
  getPrintermodelsSelect: async () => {
    const response = await http.get<PrinterDTO>("getPrintermodelsSelect/");    

    return response.data;
  },
  getPrintertypesSelect: async () => {
    const response = await http.get<PrinterDTO>("getPrintertypesSelect/");    

    return response.data;
  },
};
