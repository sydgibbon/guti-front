import { RackDTO } from "../dto/RackDTO";
import http from "../services/api/http";

export const racksRepository = {
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
};
