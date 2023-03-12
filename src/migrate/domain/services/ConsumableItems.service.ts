import { consumableItemsRepository } from "../repositories/consumableitems.repository";

export const consumableItemsService = {
  getAllConsumableItems: () => {
    return consumableItemsRepository.getAllConsumableItems();
  },
};