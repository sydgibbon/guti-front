import { PrinterDTO } from "../dto/PrinterDTO";
import { PrinterData } from "../models/forms/PrinterData";
import http from "../services/api/http";

export const printersRepository = {
  createPrinter: async (body: PrinterData) => {
    const response = await http.post<PrinterDTO>("createPrinter/", body);

    return response;
  },
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

  getPrintersCount: async () => {
    const response = await http.get("getPrintersCount/");

    return response.data;
  },
};
