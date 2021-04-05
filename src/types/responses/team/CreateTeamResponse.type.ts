export interface CreateTeamResponse {
  id: number;
  name: string;
  tag: string;
  // image: File,
  user_id: number;
  created_at: Date;
  players: Array<any>;
  invites: Array<any>;
}
