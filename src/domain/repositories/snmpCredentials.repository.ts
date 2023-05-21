import http from "../services/api/http";

export const snmpCredentialsRepository = {
  getSnmpcredentialsSelect: async () => {
    const response = await http.get("getSnmpcredentialsSelect");

    return response;
  },
};
