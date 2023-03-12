import http from "../http/http";

export const racksRepository = {
  getAllRacks: async () => {
    const response = await http.get<any>("racks/");

    return response.data;
  },
};
