import { monitorsRepository } from "../repositories/Monitors.repository";


export const monitorsService = {
  getAllMonitors: () => {
    return monitorsRepository.getAllMonitors();
  },
};
