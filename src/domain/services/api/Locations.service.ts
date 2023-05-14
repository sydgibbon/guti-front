import { locationsRepository } from "../../repositories/locations.repository";

export const locationsService = {
  getLocationsSelect: () => {
    return locationsRepository.getLocationsSelect();
  },
};
