import http from "../services/api/http";

export const groupsRepository = {
  getGroupInChargeSelect: async () => {
    const response = await http.get("getGroupInChargeSelect");

    return response;
  },
  getGroupsSelect: async () => {
    const response = await http.get("getGroupsSelect");

    return response;
  },
};
