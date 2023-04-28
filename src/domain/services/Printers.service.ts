import { printersRepository } from "../repositories/printers.repository";

export const printersService = {
  getAllPrinters: () => {
    return printersRepository.getAllPrinters();
  },
};
