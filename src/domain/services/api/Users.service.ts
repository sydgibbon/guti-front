import { usersRepository } from "../../repositories/users.repository";

export const usersService = {
  getUserInChargeSelect: () => {
    return usersRepository.getUserInChargeSelect();
  },
  getUsersSelect: () => {
    return usersRepository.getUserInChargeSelect();
  },
};
