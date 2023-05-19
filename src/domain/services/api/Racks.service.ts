import { racksRepository } from "../../repositories/racks.repository";

export const racksService = {
  getAllRacks: () => {
    return racksRepository.getAllRacks();
  },

  getRacksCount: () => {
    return racksRepository.getRacksCount();
  },
};
