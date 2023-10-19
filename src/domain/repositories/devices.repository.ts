
import { DevicesDTO } from "../dto/DevicesDTO";
import { DevicesData } from "../models/forms/DevicesData";
import http from "../services/api/http";

export const devicesRepository = {
  createDevice: async (body: DevicesData) => {
    const response = await http.post<DevicesDTO>("createPeripherals/", body);

    return response;
  },

  getAllDevices: async () => {
    const response = await http.get<DevicesDTO>("getPeripherals/");    

    return response.data;
  },
  getDevicetypesSelect: async () => {
    const response = await http.get<DevicesDTO>("getPeripheraltypesSelect/");    

    return response.data;
  },
  getDevicemodelsSelect: async () => {
    const response = await http.get<DevicesDTO>("getPeripheralmodelsSelect/");    

    return response.data;
  },
};