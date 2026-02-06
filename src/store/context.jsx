import { createContext } from "react";

import data from "@/store/data";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
}

export default AppContext;
