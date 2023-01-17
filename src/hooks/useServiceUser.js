import { useContext } from 'react';
import contextUser from '../contexts/userContext'

export const useServiceUser = () => {
  
  const { user , setUser } = useContext(contextUser);

  const login = () => {
    setUser(true)
  }
  const logout = () => {
    setUser(false)
  }

  return {
    login,
    logout,
    user
  }
}