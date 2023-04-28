import { createContext, ReactNode, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../types";
import { useLocalStorage } from "./useLocalStorage";

interface PropsAuthProvider {
  children: ReactNode;
}
const AuthContext = createContext({});

export const AuthProvider = ({ children }: PropsAuthProvider) => {
  const [username, setUsername] = useLocalStorage("username", null);
  const [password, setPassword] = useLocalStorage("password", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (user: User) => {
    setUsername(user.username);
    setPassword(user.password);
    navigate("/");
  };

  // call this function to sign out logged in user
  const logout = () => {
    setUsername(null);
    setPassword(null);
    navigate("/", { replace: true });
  };

  const value = useMemo(
    () => ({
      username,
      password,
      login,
      logout,
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [password, username]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
