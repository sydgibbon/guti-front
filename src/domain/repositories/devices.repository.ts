
import { DevicesDTO } from "../dto/DevicesDTO";
import http from "../services/api/http";

export const devicesRepository = {

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