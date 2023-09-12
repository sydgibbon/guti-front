import { NetworkDeviceData } from "../models/forms/NetworkDeviceData";
import { NetworkDevicesDTO } from "../dto/NetworkDevicesDTO";
import http from "../services/api/http";

export const networkDevicesRepository = {
  createNetworkDevice: async (body: NetworkDeviceData) => {
    const response = await http.post<NetworkDevicesDTO>(
      "createNetworkequipment/",
      body
    );

    return response;
  },
  getAllNewtorkDevices: async () => {
    const response = await http.get<NetworkDevicesDTO[]>(
      "getNetworkequipments/"
    );
    return response.data;
  },
  getNetworkDevicesTypesSelect: async () => {
    const response = await http.get<NetworkDevicesDTO[]>(
      "getNetworkequipmenttypesSelect/"
    );
    return response.data;
  },
  getNetworkDevicesModelsSelect: async () => {
    const response = await http.get<NetworkDevicesDTO[]>(
      "getNetworkequipmentmodelsSelect/"
    );
    return response.data;
  },

  getNetworkequipmentsCount: async () => {
    const response = await http.get("getNetworkequipmentsCount/");

    return response.data;
  },

  getNetworkequipmentsByManufacturers: async () => {
    const response = await http.get("getNetworkequipmentsByManufacturers/");

    return response.data;
  },

  getNetworkDeviceById: async (id: number) => {
    const response = await http.get("getNetworkequipmentsById/" + id +"/");

    return response.data;
  },
};
