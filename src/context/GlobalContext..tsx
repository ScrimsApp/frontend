import { createContext, useEffect, useState } from 'react';

import { GlobalContextType } from './context.types';

export const GlobalContext = createContext({} as GlobalContextType);

import { User } from '../types/user/User.type';
import { Notification } from '../types/notification/Notification.type';
import { api } from '../config/api';

const GlobalContextProvider = ({ children }) => {
  const [user, setUser] = useState<User>({} as User);
  const [notification, setNotification] = useState<Notification>(
    {} as Notification
  );
  const [hasNotification, setHasNotification] = useState(false);

  useEffect(() => {
    const userInfo = window.localStorage.getItem('user');

    if (userInfo) {
      const userInfoParsed = JSON.parse(userInfo);
      setUser(userInfoParsed);
    }
  }, []);

  const logoutUser = async () => {
    await api.post(
      'auth/logout',
      {},
      {
        headers: {
          Authorization: 'Bearer ' + user.token,
        },
      }
    );

    setUser({} as User);
    window.localStorage.setItem('user', '');
  };

  const updateUserInfo = (user: User) => {
    storeUserInfo(user);
    setUser(user);
  };

  const storeUserInfo = (user: User) => {
    window.localStorage.setItem('user', JSON.stringify(user));
  };

  const setNewNotification = (data: Notification) => {
    setNotification(data);
  };

  const setNotificationStatus = (notificationStatus: boolean) => {
    setHasNotification(notificationStatus);
  };

  return (
    <GlobalContext.Provider
      value={{
        userContext: { user, logoutUser, storeUserInfo, updateUserInfo },
        notificationContext: {
          notification,
          hasNotification,
          setNotificationStatus,
          setNewNotification,
        },
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContextProvider;
