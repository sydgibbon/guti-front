import { RackDTO } from "../dto/RackDTO";
import http from "../http/http";

export const racksRepository = {
  getAllRacks: async () => {
    const response = await http.get<RackDTO>("getRacks/");

    return response.data;
  },
};
