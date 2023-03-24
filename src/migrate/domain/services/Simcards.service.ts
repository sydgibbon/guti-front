import { simcardsRepository } from "../repositories/simcards.repository";

export const simcardsService = {
  getAllSimcards: () => {
    return simcardsRepository.getAllSimcards();
  },
};
