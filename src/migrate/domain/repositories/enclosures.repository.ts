import http from "../http/http";

export const enclosuresRepository = {
  getAllEnclosures: async () => {
    const response = await http.get<any>("enclosures/");

    return response.data;
  },
};
