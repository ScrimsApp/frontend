import {
  MatchesCreated,
  MatchesScheduled,
  MatchInviteReceived,
  MatchInviteSent,
} from '../../types/responses/team/TeamResponse.type';

export interface SideMatchesScheduleProps {
  invites_matches_receives: Array<MatchInviteReceived>;
  matches_accepted: Array<MatchesScheduled>;
  invites_matches_sends: Array<MatchInviteSent>;
  matches_created: Array<MatchesCreated>;
}
