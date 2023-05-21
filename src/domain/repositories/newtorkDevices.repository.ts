import { NetworkDevicesDTO } from "../dto/NetworkDevicesDTO";
import http from "../services/api/http";

export const networkDevicesRepository = {
  getAllNewtorkDevices: async () => {
    const response = await http.get<NetworkDevicesDTO[]>("getNetworkequipments/");
    return response.data;
  },
  getNetworkDevicesTypesSelect: async () => {
    const response = await http.get<NetworkDevicesDTO[]>("getNetworkequipmenttypesSelect/");
    return response.data;
  },
  getNetworkDevicesModelsSelect: async () => {
    const response = await http.get<NetworkDevicesDTO[]>("getNetworkequipmentmodelsSelect/");
    return response.data;
  },
};
