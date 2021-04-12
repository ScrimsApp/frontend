import { Invite } from '../../invite/Invite.type';
import { Player } from '../../player/Player.type';

export interface TeamResponse {
  id: number;
  name: string;
  tag: string;
  image: string;
  team_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  players: Array<Player>;
  invites: Array<Invite>;
}
