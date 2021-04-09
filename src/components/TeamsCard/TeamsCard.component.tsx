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
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  let teamFoundedIndDate = new Date(teamFoundedIn);

  let formatedTeamFoundedIndDate = teamFoundedIndDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleJoin = () => {
    //   Send API Request
    //   post -> /team
    //   team_id, type, bearer

    if (user.token) {
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

      {!user.teamId ? (
        <TeamsSideOption backgroundColor="#4767f9" onClick={handleJoin}>
          <Link href={user.token ? '' : '/signin'}>
            <JoinButton>Join</JoinButton>
          </Link>
        </TeamsSideOption>
      ) : null}
    </TeamsCardWrapper>
  );
};

export default TeamsCard;
