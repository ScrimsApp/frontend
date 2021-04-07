import { FunctionComponent, useContext } from 'react';
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

const TeamsCard: FunctionComponent<TeamsCardsProps> = ({
  id,
  teamImage,
  teamName,
  teamMembers,
  teamMatchesPlayed,
  teamFoundedIn,
  teamId,
  isLoggedIn,
}) => {
  const { notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;

  let teamFoundedIndDate = new Date(teamFoundedIn);

  let formatedTeamFoundedIndDate = teamFoundedIndDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleJoin = () => {
    //   Send API Request

    if (isLoggedIn) {
      setNotificationStatus(true);
      setNewNotification({
        type: 'success',
        title: 'Success',
        message: 'You have sent a request to join the team',
      });
    }
  };

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

      {!teamId ? (
        <TeamsSideOption backgroundColor="#4767f9" onClick={handleJoin}>
          <Link href={isLoggedIn ? '' : '/signin'}>
            <JoinButton>Join</JoinButton>
          </Link>
        </TeamsSideOption>
      ) : null}
    </TeamsCardWrapper>
  );
};

export default TeamsCard;
