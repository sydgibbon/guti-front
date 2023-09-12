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

  getNetworkequipmentsCount: () => {
    return networkDevicesRepository.getNetworkequipmentsCount();
  },

  getNetworkequipmentsByManufacturers: () => {
    return networkDevicesRepository.getNetworkequipmentsByManufacturers();
  },

  getNetworkDeviceById: (id: number) => {
    return networkDevicesRepository.getNetworkDeviceById(id);
  },
};
