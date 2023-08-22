import { MonitorDTO } from "../dto/MonitorDTO";
import http from "../services/api/http";
import { MonitorData } from "../models/forms/MonitorData";

export const monitorsRepository = {
  createMonitor: async (body: MonitorData) => {
    const response = await http.post<MonitorDTO>("createMonitor/", body);

    return response;
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
