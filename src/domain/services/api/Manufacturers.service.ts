import { manufacturersRepository } from "../../repositories/manufacturers.repository";

export const manufacturersService = {
  getManufacturersSelect: () => {
    return manufacturersRepository.getManufacturersSelect();
  },
};
