import { networkDevicesRepository } from "../../repositories/newtorkDevices.repository";


export const networkDevicesService = {
  getAllNetworkDevices: () => {
    return networkDevicesRepository.getAllNewtorkDevices();
  },
  getNetworkDevicesTypesSelect: () => {
    return networkDevicesRepository.getNetworkDevicesTypesSelect();
  },
  getNetworkDevicesModelsSelect: () => {
    return networkDevicesRepository.getNetworkDevicesModelsSelect();
  },
};
