import { Player } from '../../player/Player.type';

export interface TeamResponse {
  id: number;
  name: string;
  tag: string;
  image: string;
  created_at: string;
  players: Array<Player>;
}
