import http from "../http/http";

export const locationsRepository = {
  getAllLocations: async () => {
    const response = await http.get<any>("locations/");

    return response.data;
  },
};
