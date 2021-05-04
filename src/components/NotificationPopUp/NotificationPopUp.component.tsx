import { FunctionComponent, useContext, useEffect, useState } from 'react';

import { NotificationPopUpProps } from './types';

import {
  NotificationWrapper,
  NotificationTitle,
  NotificationMessage,
  CloseIcon,
} from './notificationPopUp.styles';

import { GlobalContext } from '../../context/GlobalContext.';

const NotificationPopUp: FunctionComponent<NotificationPopUpProps> = () => {
  const [hasNotificationToShow, setHasNotificationToShow] = useState(false);
  const { notificationContext } = useContext(GlobalContext);
  const {
    notification,
    hasNotification,
    setNotificationStatus,
  } = notificationContext;

  useEffect(() => {
    if (hasNotification) {
      setHasNotificationToShow(true);

      setTimeout(() => {
        setHasNotificationToShow(false);
        setNotificationStatus(false);
      }, 3000);
    }
  }, [notification]);

  const handleCloseNotification = () => {
    setHasNotificationToShow(false);
  };

  if (hasNotificationToShow) {
    return (
      <NotificationWrapper
        show={hasNotificationToShow}
        backgroundColor={notification.type}
      >
        <NotificationTitle>{notification.title}</NotificationTitle>
        <NotificationMessage>{notification.message}</NotificationMessage>

        <CloseIcon onClick={handleCloseNotification}>&#10006;</CloseIcon>
      </NotificationWrapper>
    );
  }

  return null;
};

export default NotificationPopUp;
