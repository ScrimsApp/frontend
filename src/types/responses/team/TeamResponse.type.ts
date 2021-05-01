import { Invite } from '../../invite/Invite.type';
import { Player } from '../../player/Player.type';

export interface TeamResponse {
  id: number;
  name: string;
  tag: string;
  description: string;
  image: string;
  team_id: number;
  user_id: number;
  created_at: string;
  updated_at: string;
  players: Array<Player>;
  invites_players: Array<Invite>;
  invites_matches_receives: Array<any>;
  matches_accepted: Array<any>;
  invites_matches_sends: Array<MatchInviteSent>;
  matches_created: Array<any>;
}

interface MatchInviteReceived {}

interface MatchesScheduled {}

interface MatchInviteSent {
  created_at: string;
  id: number;
  match: any;
  status: number;
  team_2: number;
  updated_at: string;
}

interface MatchCreated {}
