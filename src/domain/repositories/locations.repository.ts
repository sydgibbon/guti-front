import http from "../services/api/http";

export const locationsRepository = {
  getLocationsSelect: async () => {
    const response = await http.get("getLocationsSelect");

    return response;
  },
};
