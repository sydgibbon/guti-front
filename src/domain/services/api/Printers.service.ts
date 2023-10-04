import { printersRepository } from "../../repositories/printers.repository";
import { PrinterData } from "../../models/forms/PrinterData";

export const printersService = {
  createPrinter: (body: PrinterData) => {
    return printersRepository.createPrinter(body);
  },
  editPrinter: (body: PrinterData, id: number) => {
    return printersRepository.editPrinter(body, id);
  },
  getAllPrinters: () => {
    return printersRepository.getAllPrinters();
  },
  getPrintermodelsSelect: () => {
    return printersRepository.getPrintermodelsSelect();
  },
  getPrintertypesSelect: () => {
    return printersRepository.getPrintertypesSelect();
  },

  getPrintersCount: () => {
    return printersRepository.getPrintersCount();
  },
};
