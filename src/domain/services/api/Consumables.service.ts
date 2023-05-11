import { consumablesRepository } from "../../repositories/consumables.repository";

export const consumablesService = {
  getAllConsumables: () => {
    return consumablesRepository.getAllConsumables();
  },
};