import { groupsRepository } from "../../repositories/groups.repository";

export const groupsService = {
  getGroupInChargeSelect: () => {
    return groupsRepository.getGroupInChargeSelect();
  },
  getGroupsSelect: () => {
    return groupsRepository.getGroupInChargeSelect();
  },
};
