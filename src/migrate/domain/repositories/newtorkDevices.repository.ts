import { NetworkDevicesDTO } from "../dto/NetworkDevicesDTO";
import http from "../http/http";

export const networkDevicesRepository = {
  getAllNewtorkDevices: async () => {
    const response = await http.get<NetworkDevicesDTO[]>("networkequipments/");
    return response.data;
  },
};
