import { locationsRepository } from "../repositories/locations.repository";

export const locationsService = {
  getAlllocations: () => {
    return locationsRepository.getAllLocations();
  },
};
