import { SimCardData } from "../../models/forms/SimCardData";
import { simcardsRepository } from "../../repositories/simcards.repository";

export const simcardsService = {
  createSimcard: (body: SimCardData) => {
    return simcardsRepository.createSimCard(body);
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
