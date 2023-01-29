export type User = {
  username: string;
  password: string;
};

export type UserContextType = {
  UserContext: string;
  setUserContext: (user: User | null) => void;
};

export type AuthContextType  = {
  username: string | null;
  password: string | null;
  login: (user: User) => void;
  logout: () => void;
};
