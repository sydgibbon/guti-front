import { PassiveDevicesDTO } from "../dto/PassiveDevicesDTO";
import { PassiveDeviceData } from "../models/forms/PassiveDeviceData";
import http from "../services/api/http";

export const passiveDevicesRepository = {
  createPassiveDevice: async (body: PassiveDeviceData) => {
    const response = await http.post<PassiveDevicesDTO>(
      "createPassivedcequipment/",
      body
    );

    return response;
  },
  editPassiveDevice: async (body: PassiveDeviceData, id: number) => {
    const response = await http.put<PassiveDevicesDTO>(
      `updatePassiveDeviceById/${id}/`,
      body
    );

    return response;
  },
  getAllPassiveDevices: async () => {
    const response = await http.get<PassiveDevicesDTO>(
      "getPassivedcequipments/"
    );

    return response.data;
  },
  getPassivedctypesSelect: async () => {
    const response = await http.get<PassiveDevicesDTO>(
      "getPassivedcequipmenttypesSelect/"
    );

    return response.data;
  },
  getPassivedcmodelsSelect: async () => {
    const response = await http.get<PassiveDevicesDTO>(
      "getPassivedcequipmentmodelsSelect/"
    );

    return response.data;
  },
};
