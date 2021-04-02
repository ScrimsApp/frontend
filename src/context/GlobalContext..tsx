import { createContext, useEffect, useState } from 'react';

import { GlobalContextType } from './context.types';

export const GlobalContext = createContext({} as GlobalContextType);

import { User } from '../types/user/User.type';

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);

  useEffect(() => {
    // Get User data from LocalStorage
    const userInfo = window.localStorage.getItem('user');
    console.log(userInfo);

    if (userInfo) {
      const userInfoParsed = JSON.parse(userInfo);
      setUser(userInfoParsed);
    }
  }, []);

  const logoutUser = () => {
    setUser({} as User);
    window.localStorage.setItem('user', '');
  };

  const storeUserInfo = (user: User) => {
    // Store User data on LocalStorage
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <GlobalContext.Provider
      value={{ userContext: { user, logoutUser, storeUserInfo } }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
