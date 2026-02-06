import { createContext, useContext } from "react";

import data from "@/store/data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const ctx = useContext(AppContext);
  if (ctx === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return ctx;
}
