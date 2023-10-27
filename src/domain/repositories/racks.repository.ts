import { RackDTO } from "../dto/RackDTO";
import { RackData } from "../models/forms/RackData";
import http from "../services/api/http";

export const racksRepository = {
  createRack: async (body: RackData) => {
    const response = await http.post<RackDTO>("createRack/", body);

    return response;
  },

  getAllRacks: async () => {
    const response = await http.get<RackDTO>("getRacks/");

    return response.data;
  },
  getRackmodelsSelect: async () => {
    const response = await http.get<RackDTO>("getRackmodelsSelect/");

    return response.data;
  },
  getRacktypesSelect: async () => {
    const response = await http.get<RackDTO>("getRacktypesSelect/");

    return response.data;
  },
  getDcroomsSelect: async () => {
    const response = await http.get<RackDTO>("getDcroomsSelect/");
    return response.data;
  },

  getRacksCount: async () => {
    const response = await http.get("getRacksCount/");

    return response.data;
  },
};
