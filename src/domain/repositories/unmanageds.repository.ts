import { UnmanagedsDTO } from "../dto/UnmanagedsDTO";
import http from "../http/http";

export const unmanagedsRepository = {
  getAllUnmanageds: async () => {
    const response = await http.get<UnmanagedsDTO>("unmanageds/");

    return response.data;
  },
};