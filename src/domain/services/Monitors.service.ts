import { monitorsRepository } from "../repositories/monitors.repository";

export const monitorsService = {
  createMonitors: (body: object) => {
    return monitorsRepository.createMonitors(body)
  },
  getAllMonitors: () => {
    return monitorsRepository.getAllMonitors();
  },
};
