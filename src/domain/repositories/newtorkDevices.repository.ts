import { NetworkDevicesDTO } from "../dto/NetworkDevicesDTO";
import { NetworkDevicesData } from "../models/forms/NetworkDevicesData";
import http from "../services/api/http";

export const networkDevicesRepository = {
  createNetworkDevice: async (body: NetworkDevicesData) => {
    console.log(body);
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
};
