import { createContext, useEffect, useState } from 'react';

import { GlobalContextType } from './context.types';

export const GlobalContext = createContext({} as GlobalContextType);

import { User } from '../types/user/User.type';

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    // Get User data from LocalStorage

    setUser({
      name: 'vinisaveg',
      id: '1',
      token: '1234567890',
      teamId: '1',
      isTeamLeader: true,
    });
  }, []);

  const logoutUser = () => {
    setUser({} as User);
  };

  return (
    <GlobalContext.Provider value={{ userContext: { user, logoutUser } }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
