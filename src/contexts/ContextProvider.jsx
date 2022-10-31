import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

const initialState = {

};

export const ContextProvider = ({ children }) => {
    const [sidebarMenu, setSidebarMenu] = useState("");
    const [sidebarSubMenu, setSidebarSubMenu] = useState("");
  return (
    <StateContext.Provider
      value={{
        sidebarMenu,
        setSidebarMenu,
        sidebarSubMenu,
        setSidebarSubMenu,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
