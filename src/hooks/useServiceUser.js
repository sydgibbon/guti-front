import { useContext } from 'react';
import contextUser from '../contexts/userContext'

export const useServiceUser = () => {
  
  const { user , setUser } = useContext(contextUser);

  const login = (user) => {
    setUser(user)
  }
  const logout = () => {
    window.localStorage.removeItem('logguedUser');
    setUser(null)
  }

  return {
    login,
    logout,
    user
  }
}