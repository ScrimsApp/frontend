export interface MatchResponse {
  id: number;
  format: string;
  team_1: TeamMatch;
  team_2: TeamMatch;
}

interface TeamMatch {
  id: number;
  user_id: number;
  name: string;
  description: string;
  tag: string;
  image: string;
  players: Array<PlayerMatch>;
}

export interface PlayerMatch {
  id: number;
  description: string;
  image: string;
  name: string;
  person_id: string;
  created_at: string;
}
