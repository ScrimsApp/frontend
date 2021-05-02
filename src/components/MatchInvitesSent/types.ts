import { MatchInviteSent } from '../../types/responses/team/TeamResponse.type';

export interface MatchInvitesSentProps {
  visible: boolean;
  matchInvitesSent: Array<MatchInviteSent>;
}
