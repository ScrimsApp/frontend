import { Invite } from '../../invite/Invite.type';
import { Match } from '../../match/Match.type';
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

export interface MatchInviteReceived {
  id: number;
  match: Match;
  status: number;
  team: {
    description: any;
    id: number;
    image: string;
    name: string;
    tag: string;
    user_id: 1;
  };
}

interface MatchesScheduled {}

interface MatchInviteSent {
  id: number;
  match: Match;
  status: number;
  team: {
    description: any;
    id: number;
    image: string;
    name: string;
    tag: string;
    user_id: 1;
  };
}

interface MatchCreated {}
