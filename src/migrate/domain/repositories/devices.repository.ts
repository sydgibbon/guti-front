
import { DevicesDTO } from "../dto/DevicesDTO";
import http from "../http/http";

export const devicesRepository = {

  getAllDevices: async () => {
    const response = await http.get<DevicesDTO>("peripherals/");    

    return response.data;
  },
};