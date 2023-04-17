import { PassiveDevicesDTO } from "../dto/PassiveDevicesDTO";
import http from "../http/http";

export const passiveDevicesRepository = {

  getAllPassiveDevices: async () => {
    const response = await http.get<PassiveDevicesDTO>("getPassivedcequipments/");    

    return response.data;
  },
};