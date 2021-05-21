export interface SignInResponse {
  access_token: string;
  user_id: number;
  username: string;
  team_id: number | null;
  captain: boolean;
  message?: string;
}
