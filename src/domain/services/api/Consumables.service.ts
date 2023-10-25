import { ConsumableItemData } from "../../models/forms/ConsumableItemData";
import { consumablesRepository } from "../../repositories/consumables.repository";

export const consumablesService = {
  createConsumableItem: (body: ConsumableItemData) => {
    return consumablesRepository.createConsumableItem(body);
  },
  editConsumableItem: (body: ConsumableItemData, id: number) => {
    return consumablesRepository.editConsumableItem(body, id);
  },
  getAllConsumables: () => {
    return consumablesRepository.getAllConsumables();
  },
  getConsumabletypesSelect: () => {
    return consumablesRepository.getConsumabletypesSelect();
  },
};
