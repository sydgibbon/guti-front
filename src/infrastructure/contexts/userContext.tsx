import { useState, createContext, ReactNode } from "react";
import { User } from "../types";

const ContextUser = createContext({});

interface PropsUserContextProvider {
  children: ReactNode;
}

export const UserContextProvider = ({ children }: PropsUserContextProvider) => {
  const [UserContext, setUserContext] = useState<User | null>(null);

  return (
    <ContextUser.Provider value={{ UserContext, setUserContext }}>
      {children}
    </ContextUser.Provider>
  );
};

export default ContextUser;
