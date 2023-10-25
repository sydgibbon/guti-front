import { ConsumableItemData } from "../../models/forms/ConsumableItemData";
import { consumablesRepository } from "../../repositories/consumables.repository";

export const consumablesService = {
  createConsumableItem: (body: ConsumableItemData) => {
    return consumablesRepository.createConsumableItem(body);
  },
  getAllConsumables: () => {
    return consumablesRepository.getAllConsumables();
  },
  getConsumabletypesSelect: () => {
    return consumablesRepository.getConsumabletypesSelect();
  },
};