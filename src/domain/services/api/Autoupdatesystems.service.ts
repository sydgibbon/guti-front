import { autoupdatesystemsRepository } from "../../repositories/autoupdatesystems.repository";

export const autoupdatesystemsService = {
  getAutoupdatesystemsSelect: () => {
    return autoupdatesystemsRepository.getAutoupdatesystemsSelect();
  },
};
