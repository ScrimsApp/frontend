import { FunctionComponent, useEffect, useState } from 'react';

import { NotificationPopUpProps } from './types';

import {
  NotificationWrapper,
  NotificationTitle,
  NotificationMessage,
  CloseIcon,
} from './notificationPopUp.styles';

const NotificationPopUp: FunctionComponent<NotificationPopUpProps> = ({
  backgroundColor,
  title,
  message,
}) => {
  const [hasNotification, setHasNotification] = useState(false);
  // Get notification from context

  useEffect(() => {
    if (!hasNotification) {
      // is there any notification from context?
      // setHasNotification(true)
      // setTimeout(() => {
      //     setHasNotification(false)
      // }, 3000)
      //   useEffect will always run when context notification change
    }
  }, []);

  const handleCloseNotification = () => {
    setHasNotification(false);
  };

  if (hasNotification) {
    return (
      <NotificationWrapper
        display={hasNotification}
        backgroundColor={backgroundColor}
      >
        <NotificationTitle>{title}</NotificationTitle>
        <NotificationMessage>{message}</NotificationMessage>

        <CloseIcon onClick={handleCloseNotification}>&#10006;</CloseIcon>
      </NotificationWrapper>
    );
  }

  return null;
};

export default NotificationPopUp;
