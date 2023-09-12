import { NetworkDeviceData } from "../../models/forms/NetworkDeviceData";
import { networkDevicesRepository } from "../../repositories/newtorkDevices.repository";

export const networkDevicesService = {
  createNetworkDevice: (body: NetworkDeviceData) => {
    return networkDevicesRepository.createNetworkDevice(body);
  },
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
