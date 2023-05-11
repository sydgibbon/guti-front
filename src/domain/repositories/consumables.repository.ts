import { ConsumablesDTO } from "../dto/ConsumablesDTO";
import http from "../services/api/http";

export const consumablesRepository = {
  getAllConsumables: async () => {
    const response = await http.get<ConsumablesDTO>("getConsumableitems/");

    return response.data;
  },
};
