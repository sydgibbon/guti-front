import { statesRepository } from "../../repositories/states.repository";

export const statesService = {
  getStatesSelect: () => {
    return statesRepository.getStatesSelect();
  },
};
