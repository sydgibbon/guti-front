import { ConsumableItemsDTO } from "../dto/ConsumableItemsDTO";
import { ConsumablesDTO } from "../dto/ConsumablesDTO";
import { ConsumableItemData } from "../models/forms/ConsumableItemData";
import http from "../services/api/http";

export const consumablesRepository = {
  createConsumableItem: async (body: ConsumableItemData) => {
    const response = await http.post<ConsumableItemsDTO>("createConsumableItems/", body);

    return response;
  },
  getAllConsumables: async () => {
    const response = await http.get<ConsumablesDTO>("getConsumableitems/");

    return response.data;
  },
  getConsumabletypesSelect: async () => {
    const response = await http.get<ConsumablesDTO>("getConsumableitemtypesSelect/");

    return response.data;
  },
};
