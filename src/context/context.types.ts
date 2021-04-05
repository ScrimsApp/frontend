import { User } from '../types/user/User.type';
import { Notification } from '../types/notification/Notification.type';

export interface GlobalContextType {
  userContext?: UserContext;
  notificationContext: NotificationContext;
}

export interface UserContext {
  user?: User;
  logoutUser?: () => void;
  storeUserInfo?: (user: User) => void;
}

export interface NotificationContext {
  notification?: Notification;
  hasNotification: boolean;
  setNotificationStatus: (notificationStatus: boolean) => void;
  setNewNotification: (data: Notification) => void;
}
