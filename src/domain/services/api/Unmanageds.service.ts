import { unmanagedsRepository } from "../../repositories/unmanageds.repository";

export const unmanagedsService = {
  getAllUnmanageds: () => {
    return unmanagedsRepository.getAllUnmanageds();
  },
};