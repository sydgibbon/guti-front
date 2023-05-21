import { simcardsRepository } from "../../repositories/simcards.repository";

export const simcardsService = {
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
