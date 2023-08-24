import { PassiveDeviceData } from "../../models/forms/PassiveDeviceData";
import { passiveDevicesRepository } from "../../repositories/passiveDevices.repository";

export const PassiveDevicesService = {
  createPassiveDevice: (body: PassiveDeviceData) => {
    return passiveDevicesRepository.createPassiveDevice(body);
  },
  getAllPassiveDevices: () => {
    return passiveDevicesRepository.getAllPassiveDevices();
  },
  getPassivedctypesSelect: () => {
    return passiveDevicesRepository.getPassivedctypesSelect();
  },
  getPassivedcmodelsSelect: () => {
    return passiveDevicesRepository.getPassivedcmodelsSelect();
  },
};
