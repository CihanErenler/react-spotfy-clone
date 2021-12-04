import React, { useContext } from "react";
import { links } from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  return (
    <AppContext.Provider value={{ links }}>{children}</AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
