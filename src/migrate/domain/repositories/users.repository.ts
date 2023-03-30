import { UserDTO } from "../dto/UserDTO";
import http from "../http/http";

export const usersRepository = {
  getAllUsers: async () => {
    const response = await http.get<UserDTO>("users/");

    return response.data;
  },
};
