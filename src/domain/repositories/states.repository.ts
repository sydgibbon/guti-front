import http from "../services/api/http";

export const statesRepository = {
  getStatesSelect: async () => {
    const response = await http.get("getStatesSelect");

    return response;
  },
};
