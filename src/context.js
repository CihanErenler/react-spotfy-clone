import React, { useContext, useState } from "react";
import { links } from "./data";

const AppContext = React.createContext();

const getCurrentTime = () => {
  let welcomeWord = "Good morging";
  const today = new Date();
  const hour = today.getHours();
  if (hour > 12 && hour < 18) welcomeWord = "Good afternoon";
  if (hour > 18 && hour < 24) welcomeWord = "Good evening";
  if (hour > 0 && hour < 6) welcomeWord = "Good night";
  return welcomeWord;
};

export const AppProvider = ({ children }) => {
  const [active, setActive] = useState(0);
  return (
    <AppContext.Provider value={{ links, active, setActive, getCurrentTime }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
