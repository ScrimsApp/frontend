import { FunctionComponent, useContext } from 'react';
import { mutate } from 'swr';

import {
  TeamRequestCardWrapper,
  TeamRequestCardImage,
  TeamName,
  TeamNameWrapper,
  TeamOptionButton,
  TeamOptions,
} from './teamInvites.styles';

import { TeamInvitesCardProps } from './types';

import { api } from '../../config/api';
import { GlobalContext } from '../../context/GlobalContext.';

import { TeamRequestResponse } from '../../types/responses/player/TeamRequestResponse.type';

const TeamRequestCard: FunctionComponent<TeamInvitesCardProps> = ({
  teamImage,
  teamName,
  teamId,
  inviteId,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user, updateUserInfo } = userContext;

  const handleTeamRequest = async (option: 'accept' | 'decline') => {
    let response = await api.post<TeamRequestResponse>(
      `invite/team/${option}`,
      {
        invite_id: inviteId,
        team_id: teamId,
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

      updateUserInfo({ ...user, teamId: data.team_id, captain: false });
    }

    if (status === 200) {
      mutate('player');
    }
  };

  return (
    <TeamRequestCardWrapper>
      <TeamRequestCardImage
        src={`http://localhost:8000/storage/${teamImage}`}
        alt={teamName}
      />

      <TeamNameWrapper>
        <TeamName>{teamName}</TeamName>

        <TeamOptions>
          <TeamOptionButton onClick={() => handleTeamRequest('accept')}>
            <svg
              style={{ marginRight: '5px' }}
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
          </TeamOptionButton>

          <TeamOptionButton onClick={() => handleTeamRequest('decline')}>
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
          </TeamOptionButton>
        </TeamOptions>
      </TeamNameWrapper>
    </TeamRequestCardWrapper>
  );
};

export default TeamRequestCard;
