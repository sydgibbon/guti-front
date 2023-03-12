import { NetworkDevice } from "../adapter/NetworkDevices";
import { NetworkDevicesDTO } from "../dto/NetworkDevicesDTO";
import http from "../http/http";

export const networkDevicesRepository = {
  getAllNewtorkDevices: async () => {
    const response = await http.get<NetworkDevicesDTO[]>("networkequipments/");

    const data = response.data.map(
      (network): NetworkDevice => ({
        name: network.name,
        states: network.states,
        manufacturers: network.manufacturers,
        locations: network.locations,
        networkequipmenttypes: network.networkequipmenttypes,
        serial: network.serial,
        date_mod: network.date_mod,
      })
    );
    return data;
  },
};
