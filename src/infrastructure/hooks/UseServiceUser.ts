import { useContext } from "react";
import ContextUser from "../contexts/userContext";
import { User, UserContextType } from "../types";

export const useServiceUser = () => {
  const { UserContext, setUserContext } = useContext(
    ContextUser
  ) as UserContextType;

  const login = (UserContext: User) => {
    setUserContext(UserContext);
  };

  const logout = () => {
    setUserContext(null);
  };

  return {
    login,
    logout,
    user: UserContext,
  };
};
