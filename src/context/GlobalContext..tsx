import { createContext } from 'react';

import { GlobalContextType } from './context.types';

export const GlobalContext = createContext({} as GlobalContextType);

const GlobalContextProvider = ({ children }) => {
  return <GlobalContext.Provider value={{}}>{children}</GlobalContext.Provider>;
};

export default GlobalContextProvider;
