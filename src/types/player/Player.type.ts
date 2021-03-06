import { Team } from '../team/Team.type';

export interface Player {
  id: number;
  name: string;
  email?: string;
  description?: string;
  image: any;
  person_id: any;
  team_id: number;
  created_at: string;
  team?: Team;
  invites?: Array<TeamInvites>;
}

export interface TeamInvites {
  id: number;
  team: Team;
}
