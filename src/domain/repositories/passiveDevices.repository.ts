import { PassiveDevicesDTO } from "../dto/PassiveDevicesDTO";
import http from "../services/api/http";

export const passiveDevicesRepository = {

  getAllPassiveDevices: async () => {
    const response = await http.get<PassiveDevicesDTO>("getPassivedcequipments/");    

    return response.data;
  },
};