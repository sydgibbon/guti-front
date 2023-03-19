import { ConsumablesDTO } from "../dto/ConsumablesDTO";
import http from "../http/http";

export const consumablesRepository = {
  getAllConsumables: async () => {
    const response = await http.get<ConsumablesDTO>("consumableitems/");

    return response.data;
  },
};
