import { SimCardData } from "../../models/forms/SimCardData";
import { simcardsRepository } from "../../repositories/simcards.repository";

export const simcardsService = {
  createSimcard: (body: SimCardData) => {
    return simcardsRepository.createSimCard(body);
  },
  editSimcard: (body: SimCardData, id: number) => {
    return simcardsRepository.editSimCard(body, id);
  },
  getAllSimcards: () => {
    return simcardsRepository.getAllSimcards();
  },
  getDevicesimcardsSelect: () => {
    return simcardsRepository.getDevicesimcardsSelect();
  },
  getLinesSelect: () => {
    return simcardsRepository.getLinesSelect();
  },
};
