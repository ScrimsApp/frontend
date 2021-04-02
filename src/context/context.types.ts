import { User } from '../types/user/User.type';

export interface GlobalContextType {
  userContext?: UserContext;
}

export interface UserContext {
  user?: User;
  logoutUser?: () => void;
  storeUserInfo?: (user: User) => void;
}
