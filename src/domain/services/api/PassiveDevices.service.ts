import { passiveDevicesRepository } from "../../repositories/passiveDevices.repository";

export const PassiveDevicesService = {
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
