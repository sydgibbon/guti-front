import { RackDTO } from "../dto/RackDTO";
import http from "../services/api/http";

export const racksRepository = {
  getAllRacks: async () => {
    const response = await http.get<RackDTO>("getRacks/");

    return response.data;
  },
};
