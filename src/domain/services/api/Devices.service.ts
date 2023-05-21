import { devicesRepository } from "../../repositories/devices.repository";

export const devicesService = {
  getAllDevices: () => {
    return devicesRepository.getAllDevices();
  },
  
  getDevicetypesSelect: () => {
    return devicesRepository.getDevicetypesSelect();
  },
  getDevicemodelsSelect: () => {
    return devicesRepository.getDevicemodelsSelect();
  },
};