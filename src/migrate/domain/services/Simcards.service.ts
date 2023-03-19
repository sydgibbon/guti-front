import { simcardsRepository } from "../repositories/Simcards.repository";

export const simcardsService = {
  getAllSimcards: () => {
    return simcardsRepository.getAllSimcards();
  },
};
