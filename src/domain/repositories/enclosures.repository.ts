import { EnclosureDTO } from "../dto/EnclosureDTO";
import http from "../http/http";

export const enclosuresRepository = {
  getAllEnclosures: async () => {
    const response = await http.get<EnclosureDTO>("getEnclosures/");

    return response.data;
  },
};
