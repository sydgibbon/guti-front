import { monitorsRepository } from "../repositories/monitors.repository";

export const monitorsService = {
  getAllMonitors: () => {
    return monitorsRepository.getAllMonitors();
  },
};
