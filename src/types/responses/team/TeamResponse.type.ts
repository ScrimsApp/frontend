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
  matches_created: Array<MatchesCreated>;
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

export interface MatchesScheduled {
  data: string;
  format: string;
  id: number;
  team_1: {
    description: any;
    id: number;
    image: string;
    name: string;
    tag: string;
    user_id: number;
  };
  team_2: {
    description: any;
    id: number;
    image: string;
    name: string;
    tag: string;
    user_id: number;
  };
  time: string;
  team_adversary_image: string;
  team_adversary_name: string;
}

export interface MatchInviteSent {
  id: number;
  match: Match;
  status: number;
}

export interface MatchesCreated {
  id: number;
  date: string;
  time: string;
  format: string;
  team_1: {
    description: any;
    id: number;
    image: string;
    name: string;
    tag: string;
    user_id: 1;
  };
}
