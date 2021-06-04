import { FunctionComponent, useContext } from 'react';
import { mutate } from 'swr';
import { api } from '../../config/api';
import { GlobalContext } from '../../context/GlobalContext.';
import { RemovePlayerRequest } from '../../types/requests/team/RemovePlayerRequests.type';

import {
  TeamMemberCardWrapper,
  TeamMemberImage,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberDescription,
  SideOption,
  RemoveButton,
} from './teamMemberCard.styles';
import { TeamMemberCardProps } from './types';

import CrownIcon from '../../assets/icons/crown-icon.svg';

const TeamMemberCard: FunctionComponent<TeamMemberCardProps> = ({
  image,
  playerName,
  playerId,
  description1,
  description2,
  isCaptain,
  userId,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { user } = userContext;
  const { setNotificationStatus, setNewNotification } = notificationContext;

  let playerJoinedInDate = new Date(description1);

  let formatedPlayerJoinedInDate = playerJoinedInDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleTeamMember = async () => {
    const response = await api.delete<RemovePlayerRequest>(
      `/team/player/${playerId}`,
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

    if (status === 200) {
      mutate('team');
    }
  };

  return (
    <TeamMemberCardWrapper>
      <TeamMemberImage src={image} alt={playerName} />

      <TeamMemberInfo>
        <TeamMemberName>{playerName}</TeamMemberName>
        <TeamMemberDescription>{`Joined in ${formatedPlayerJoinedInDate}`}</TeamMemberDescription>
        <TeamMemberDescription>{description2}</TeamMemberDescription>
      </TeamMemberInfo>

      {isCaptain && playerId != user.id ? (
        <SideOption backgroundColor="#ED5353" onClick={handleTeamMember}>
          <RemoveButton>Remove</RemoveButton>
        </SideOption>
      ) : null}

      {userId === playerId ? (
        <div style={{ position: 'absolute', right: '30px', top: '20px' }}>
          <CrownIcon />
        </div>
      ) : null}
    </TeamMemberCardWrapper>
  );
};

export default TeamMemberCard;
