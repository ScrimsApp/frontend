import { Team } from '../../team/Team.type';

export interface TeamsResponse {
  data: Array<Team>;

  current_page: number;
  last_page: number;
  total: number;
}
