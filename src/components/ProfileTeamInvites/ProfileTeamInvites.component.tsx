import { FunctionComponent } from 'react';

import TeamRequestCard from '../TeamInvitesCard/TeamInvitesCard.component';

import {
  TeamsRequests,
  TeamsRequestsWrapper,
  TeamsRequestsTitle,
} from './profileTeamInvites.styles';

import { ProfileTeamInvitesProps } from './types';

const ProfileTeamInvites: FunctionComponent<ProfileTeamInvitesProps> = ({
  invites,
}) => {
  return (
    <TeamsRequestsWrapper>
      <TeamsRequestsTitle>Team invites</TeamsRequestsTitle>
      <TeamsRequests>
        {invites.map((invite) => (
          <TeamRequestCard
            key={invite.id}
            inviteId={invite.id}
            teamId={invite.team.id}
            teamImage={invite.team.image}
            teamName={invite.team.name}
          />
        ))}
      </TeamsRequests>
    </TeamsRequestsWrapper>
  );
};

export default ProfileTeamInvites;
