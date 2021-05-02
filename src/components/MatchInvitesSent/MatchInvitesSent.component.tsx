import { FunctionComponent } from 'react';
import {
  MatchInvitesSentCardImage,
  MatchInvitesSentCardWrapper,
  MatchInvitesSentDescription,
  MatchInvitesSentInfo,
  MatchInvitesSentName,
  MatchInvitesSentWrapper,
  MatchInvitesSideOption,
  MatchInvitesCancelButton,
} from './matchInvitesSent.styles';

import { MatchInvitesSentProps } from './types';

const MatchInvitesSent: FunctionComponent<MatchInvitesSentProps> = ({
  visible,
  matchInvitesSent,
}) => {
  return (
    <MatchInvitesSentWrapper visible={visible}>
      {matchInvitesSent.map((invite) => (
        <MatchInvitesSentCardWrapper key={invite.id}>
          <MatchInvitesSentCardImage
            src={`http://localhost:8000/storage/${invite.match.team_1.image}`}
            alt={invite.match.team_1.name}
          />

          <MatchInvitesSentInfo>
            <MatchInvitesSentName>
              {invite.match.team_1.name}
            </MatchInvitesSentName>

            <MatchInvitesSentDescription>
              {invite.match.format}
            </MatchInvitesSentDescription>

            <MatchInvitesSentDescription>
              {invite.match.date} {invite.match.time}
            </MatchInvitesSentDescription>
          </MatchInvitesSentInfo>

          <MatchInvitesSideOption backgroundColor="#ED5353">
            <MatchInvitesCancelButton>Cancel</MatchInvitesCancelButton>
          </MatchInvitesSideOption>
        </MatchInvitesSentCardWrapper>
      ))}
    </MatchInvitesSentWrapper>
  );
};

export default MatchInvitesSent;
