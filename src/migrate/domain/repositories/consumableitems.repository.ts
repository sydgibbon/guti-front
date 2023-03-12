import { ConsumableItemsDTO } from "../dto/ConsumableItemsDTO";
import http from "../http/http";

export const consumableItemsRepository = {
  getAllConsumableItems: async () => {
    const response = await http.get<ConsumableItemsDTO>("consumables/");

    return response.data;
  },
};
