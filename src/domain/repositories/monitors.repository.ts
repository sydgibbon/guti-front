import { MonitorDTO } from "../dto/MonitorDTO";
import http from "../services/api/http";

export const monitorsRepository = {
  createMonitors: async (body: object) => {
    const response = await http.post("monitors/", body);

    return response.data;
  },
  getAllMonitors: async () => {
    const response = await http.get<MonitorDTO>("getMonitors/");

    return response.data;
  },
  getMonitortypesSelect: async () => {
    const response = await http.get<MonitorDTO>("getMonitortypesSelect/");

    return response.data;
  },
  getMonitormodelsSelect: async () => {
    const response = await http.get<MonitorDTO>("getMonitormodelsSelect/");
    return response.data;
  },

  getMonitorsCount: async () => {
    const response = await http.get("getMonitorsCount/");

    return response.data;
  },
  getMonitorsByManufacturers: async () => {
    const response = await http.get("getMonitorsByManufacturers/");

    return response.data;
  },
};
