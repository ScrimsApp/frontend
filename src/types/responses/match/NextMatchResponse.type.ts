import { Team } from '../../team/Team.type';

export interface NextMatchResponse {
  id: number;
  format: string;
  date: string;
  time: string;
  team: Team;
}
