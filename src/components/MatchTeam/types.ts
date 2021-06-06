import { PlayerMatch } from '../../types/responses/match/MatchResponse.type';

export interface MatchTeamProps {
  id: number;
  userId: number;
  image: string;
  name: string;
  players: Array<PlayerMatch>;
}
