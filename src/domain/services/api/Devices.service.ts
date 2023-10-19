import { DevicesData } from "../../models/forms/DevicesData";
import { devicesRepository } from "../../repositories/devices.repository";

export const devicesService = {
  createDevices: (body: DevicesData) => {
    return devicesRepository.createDevice(body);
  },

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