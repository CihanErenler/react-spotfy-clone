import React, { useContext, useState } from "react";
import { links } from "./data";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  return (
    <AppContext.Provider value={{ links, active, setActive }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
