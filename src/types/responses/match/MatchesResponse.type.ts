import { Match } from '../../match/Match.type';

export interface MatchesResponse {
  data: Array<Match>;

  current_page: number;
  last_page: number;
  total: number;
}
