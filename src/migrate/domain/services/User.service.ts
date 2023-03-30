import { usersRepository } from "../repositories/users.repository";

export const usersService = {
  getAllUsers: () => {
    return usersRepository.getAllUsers();
  },
};
