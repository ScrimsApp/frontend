import { Player } from '../../player/Player.type';

export interface PlayersResponse {
  data: Array<Player>;

  current_page: number;
  last_page: number;
  total: number;
}
