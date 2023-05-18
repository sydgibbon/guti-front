import http from "../services/api/http";

export const manufacturersRepository = {
  getManufacturersSelect: async () => {
    const response = await http.get("getManufacturersSelect");

    return response;
  },
};
