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

import AcceptIcon from '../../assets/icons/accept-icon.svg';
import DeclineIcon from '../../assets/icons/decline-icon.svg';

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
            <AcceptIcon style={{ marginRight: '5px' }} />
          </TeamOptionButton>

          <TeamOptionButton onClick={() => handleTeamRequest('decline')}>
            <DeclineIcon />
          </TeamOptionButton>
        </TeamOptions>
      </TeamNameWrapper>
    </TeamRequestCardWrapper>
  );
};

export default TeamRequestCard;
