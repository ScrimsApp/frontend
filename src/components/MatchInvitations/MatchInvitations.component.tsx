import { FunctionComponent, useContext } from 'react';
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
import { mutate } from 'swr';

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
            src={`http://localhost:8000/storage/${invite.team.image}`}
            alt={invite.team.name}
          />

          <MatchInvitationsInfo>
            <MatchInvitationsName>{invite.team.name}</MatchInvitationsName>
            <MatchInvitationsDescription>
              {invite.match.format}
            </MatchInvitationsDescription>
            <MatchInvitationsDescription>
              {invite.match.date} {invite.match.time}
            </MatchInvitationsDescription>
          </MatchInvitationsInfo>

          {user.captain ? (
            <MatchInvitationsSideOption backgroundColor="#4767F9">
              <OptionButton
                onClick={() => handleMatchInvitation(invite.id, 'accept')}
              >
                <svg
                  width="25"
                  height="20"
                  viewBox="0 0 25 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.57297 19.6147C9.33433 19.862 9.00874 20 8.67053 20C8.33232 20 8.00673 19.862 7.76809 19.6147L0.560957 12.1881C-0.186986 11.4175 -0.186986 10.168 0.560957 9.39882L1.4634 8.46881C2.21157 7.69822 3.42301 7.69822 4.17095 8.46881L8.67053 13.1049L20.829 0.577944C21.5772 -0.192648 22.7898 -0.192648 23.5366 0.577944L24.439 1.50795C25.187 2.27855 25.187 3.52787 24.439 4.29726L9.57297 19.6147Z"
                    fill="#6DDB86"
                  />
                </svg>
              </OptionButton>
              <OptionButton
                onClick={() => handleMatchInvitation(invite.id, 'decline')}
              >
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="21"
                    y1="3.70444"
                    x2="3.83392"
                    y2="20.8705"
                    stroke="#ED5353"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <line
                    x1="3.83237"
                    y1="3.65186"
                    x2="20.9984"
                    y2="20.8179"
                    stroke="#ED5353"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </OptionButton>
            </MatchInvitationsSideOption>
          ) : null}
        </MatchInvitationsCardWrapper>
      ))}
    </MatchInvitationsWrapper>
  );
};

export default MatchInvitations;
