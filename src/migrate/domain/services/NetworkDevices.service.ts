import { networkDevicesRepository } from "../repositories/newtorkDevices.repository";


export const networkDevicesService = {
  getAllNetworkDevices: () => {
    return networkDevicesRepository.getAllNewtorkDevices();
  },
};
