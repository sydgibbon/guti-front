import { monitorsRepository } from "../../repositories/monitors.repository";

export const monitorsService = {
  createMonitors: (body: object) => {
    return monitorsRepository.createMonitors(body);
  },
  getAllMonitors: () => {
    return monitorsRepository.getAllMonitors();
  },
  getMonitortypesSelect: () => {
    return monitorsRepository.getMonitortypesSelect();
  },
  getMonitormodelsSelect: () => {
    return monitorsRepository.getMonitormodelsSelect();
  },

  getMonitorsCount: () => {
    return monitorsRepository.getMonitorsCount();
  },

  getMonitorsByManufacturers: () => {
    return monitorsRepository.getMonitorsByManufacturers();
  },
};
