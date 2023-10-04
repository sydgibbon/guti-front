import { RackData } from "../../models/forms/RackData";
import { racksRepository } from "../../repositories/racks.repository";

export const racksService = {
  createRack: (body: RackData) => {
    return racksRepository.createRack(body);
  },
  editRack: (body: RackData, id: number) => {
    return racksRepository.editRack(body, id);
  },
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
