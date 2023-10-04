import { EnclosureDTO } from "../dto/EnclosureDTO";
import { EnclosureData } from "../models/forms/EnclosureData";
import http from "../services/api/http";

export const enclosuresRepository = {
  createEnclosure: async (body: EnclosureData) => {
    const response = await http.post<EnclosureDTO>("createEnclosure/", body);

    return response;
  },
  editEnclosure: async (body: EnclosureData, id: number) => {
    const response = await http.put<EnclosureDTO>(
      `updateEnclosureById/${id}/`,
      body
    );

    return response;
  },
  getAllEnclosures: async () => {
    const response = await http.get<EnclosureDTO>("getEnclosures/");

    return response.data;
  },
  getEnclosuremodelsSelect: async () => {
    const response = await http.get<EnclosureDTO>("getEnclosuremodelsSelect/");
    return response.data;
  },

  getEnclosuresCount: async () => {
    const response = await http.get("getEnclosuresCount/");

    return response.data;
  },
};
