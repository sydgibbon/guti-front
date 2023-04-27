import { MonitorDTO } from "../dto/MonitorDTO";
import http from "../http/http";

export const monitorsRepository = {
  getAllMonitors: async () => {
    const response = await http.get<MonitorDTO>("getMonitors/");    

    return response.data;
  },
};