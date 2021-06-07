import { FunctionComponent, useContext } from 'react';
import { mutate } from 'swr';

import { api } from '../../config/api';
import { GlobalContext } from '../../context/GlobalContext.';

import {
  MatchInvitationsWrapper,
  MatchInvitationsCardWrapper,
  MatchInvitationsCardImage,
  MatchInvitationsInfo,
  MatchInvitationsName,
  MatchInvitationsDescription,
  MatchInvitationsSideOption,
  OptionButton,
} from './matchInvitations.styles';

import { MatchInvitationsProps } from './types';
import { InviteMatchResponse } from '../../types/responses/match/InviteMatchResponse.type';

import AcceptIcon from '../../assets/icons/accept-icon.svg';
import DeclineIcon from '../../assets/icons/decline-icon.svg';

import { parseDate } from '../../utils/functions/parseDate';

const MatchInvitations: FunctionComponent<MatchInvitationsProps> = ({
  visible,
  matchInvites,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  const handleMatchInvitation = async (id: number, option: string) => {
    if (user.token) {
      const response = await api.post<InviteMatchResponse>(
        `invite/match/${option}`,
        {
          invite_id: id,
        },
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        }
      );

      const { data, status } = response;

      if (data) {
        setNotificationStatus(true);
        setNewNotification({
          type: status === 200 ? 'success' : 'error',
          title: status === 200 ? 'Success' : 'Whoops',
          message: data.message,
        });
      }

      status === 200 ? mutate('team') : null;
    }
  };

  return (
    <MatchInvitationsWrapper visible={visible}>
      {matchInvites?.map((invite) => (
        <MatchInvitationsCardWrapper key={invite.id}>
          <MatchInvitationsCardImage
            src={`https://scrimsapp.tech/storage/${invite.team.image}`}
            alt={invite.team.name}
          />

          <MatchInvitationsInfo>
            <MatchInvitationsName>{invite.team.name}</MatchInvitationsName>
            <MatchInvitationsDescription>
              {invite.match.format}
            </MatchInvitationsDescription>
            <MatchInvitationsDescription>
              {parseDate(invite.match.date)} {invite.match.time}
            </MatchInvitationsDescription>
          </MatchInvitationsInfo>

          {user.captain ? (
            <MatchInvitationsSideOption backgroundColor="#4767F9">
              <OptionButton
                onClick={() => handleMatchInvitation(invite.id, 'accept')}
              >
                <AcceptIcon />
              </OptionButton>
              <OptionButton
                onClick={() => handleMatchInvitation(invite.id, 'decline')}
              >
                <DeclineIcon />
              </OptionButton>
            </MatchInvitationsSideOption>
          ) : null}
        </MatchInvitationsCardWrapper>
      ))}
    </MatchInvitationsWrapper>
  );
};

export default MatchInvitations;
