import http from "../services/api/http";

export const networksRepository = {
  getNetworksSelect: async () => {
    const response = await http.get("getNetworksSelect");

    return response;
  },
};
