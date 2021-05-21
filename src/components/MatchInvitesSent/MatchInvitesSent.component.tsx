import { FunctionComponent, useContext } from 'react';
import { mutate } from 'swr';

import { api } from '../../config/api';
import { GlobalContext } from '../../context/GlobalContext.';
import { InviteMatchResponse } from '../../types/responses/match/InviteMatchResponse.type';

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
  const { notificationContext, userContext } = useContext(GlobalContext);
  const { user } = userContext;
  const { setNotificationStatus, setNewNotification } = notificationContext;

  const handleCancelMatchInviteSent = async (id: number) => {
    if (user.token) {
      const response = await api.post<InviteMatchResponse>(
        'invite/match/decline',
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
          title: status === 200 ? 'Success' : 'Whoops!',
          message: data.message,
        });
      }

      status === 200 ? mutate('team') : null;
    }
  };

  return (
    <MatchInvitesSentWrapper visible={visible}>
      {matchInvitesSent?.map((invite) => (
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

          {user.captain ? (
            <MatchInvitesSideOption backgroundColor="#ED5353">
              <MatchInvitesCancelButton
                onClick={() => handleCancelMatchInviteSent(invite.id)}
              >
                Cancel
              </MatchInvitesCancelButton>
            </MatchInvitesSideOption>
          ) : null}
        </MatchInvitesSentCardWrapper>
      ))}
    </MatchInvitesSentWrapper>
  );
};

export default MatchInvitesSent;
