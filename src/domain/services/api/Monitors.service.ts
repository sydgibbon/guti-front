import { monitorsRepository } from "../../repositories/monitors.repository";
import { MonitorData } from "../../models/forms/MonitorData";

export const monitorsService = {
  createMonitors: (body: MonitorData) => {
    return monitorsRepository.createMonitor(body);
  },
  editMonitor: (body: MonitorData, id: number) => {
    return monitorsRepository.editMonitor(body, id);
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
  getMonitorById: (id: number) => {
    return monitorsRepository.getMonitorById(id);
  },
};
