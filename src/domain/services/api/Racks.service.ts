import { racksRepository } from "../../repositories/racks.repository";

export const racksService = {
  getAllRacks: () => {
    return racksRepository.getAllRacks();
  },
  getRackmodelsSelect: () => {
    return racksRepository.getRackmodelsSelect();
  },
  getRacktypesSelect: () => {
    return racksRepository.getRacktypesSelect();
  },
  getDcroomsSelect: () => {
    return racksRepository.getDcroomsSelect();
  },

  getRacksCount: () => {
    return racksRepository.getRacksCount();
  },
};
