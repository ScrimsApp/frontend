import { FunctionComponent, useContext, useEffect, useState } from 'react';
import Link from 'next/link';

import { TeamsCardsProps } from './types';

import {
  TeamsCardDescription,
  TeamsCardImage,
  TeamsCardInfo,
  TeamsCardName,
  TeamsCardWrapper,
  TeamsSideOption,
  JoinButton,
  TeamCardDescriptionsWrapper,
} from './teamsCard.styles';
import { GlobalContext } from '../../context/GlobalContext.';

import { api } from '../../config/api';
import { JoinTeamResponse } from '../../types/responses/team/JoinTeamReponse.type';

const TeamsCard: FunctionComponent<TeamsCardsProps> = ({
  id,
  teamImage,
  teamName,
  teamMembers,
  teamMatchesPlayed,
  teamFoundedIn,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;
  const [cardLink, setCardLink] = useState('');

  let teamFoundedIndDate = new Date(teamFoundedIn);

  let formatedTeamFoundedIndDate = teamFoundedIndDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleJoin = async () => {
    if (!cardLink && !user.token) {
      setCardLink('/signin');
      return;
    }

    if (!cardLink && user.token) {
      setCardLink('#');
      return;
    }

    if (user.token) {
      let response = await api.post<JoinTeamResponse>(
        '/invite/team',
        {
          type: 'player',
          team_id: id,
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
    }
  };

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth <= 640) {
      return;
    } else {
      setCardLink('/signin');
    }
  });

  return (
    <TeamsCardWrapper>
      <Link href={`/team/${id}`}>
        <TeamsCardImage src={teamImage} key={teamName} alt={teamName} />
      </Link>

      <Link href={`/team/${id}`}>
        <TeamsCardInfo>
          <TeamsCardName>{teamName}</TeamsCardName>

          <TeamCardDescriptionsWrapper>
            <TeamsCardDescription>{teamMembers}</TeamsCardDescription>

            <TeamsCardDescription>{teamMatchesPlayed}</TeamsCardDescription>

            <TeamsCardDescription>{`Founded in ${formatedTeamFoundedIndDate}`}</TeamsCardDescription>
          </TeamCardDescriptionsWrapper>
        </TeamsCardInfo>
      </Link>

      {!user.teamId ? (
        <TeamsSideOption backgroundColor="#4767f9" onClick={handleJoin}>
          <Link href={user.token ? '' : cardLink}>
            <JoinButton>Join</JoinButton>
          </Link>
        </TeamsSideOption>
      ) : null}
    </TeamsCardWrapper>
  );
};

export default TeamsCard;
