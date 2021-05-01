import { MatchInviteReceived } from '../../types/responses/team/TeamResponse.type';

export interface MatchInvitationsProps {
  visible: boolean;
  matchInvites: Array<MatchInviteReceived>;
}
