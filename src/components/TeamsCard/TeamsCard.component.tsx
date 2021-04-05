import { FunctionComponent, useContext } from 'react';

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
  teamImage,
  teamName,
  teamMembers,
  teamMatchesPlayed,
  teamFoundedIn,
  teamId,
}) => {
  const { notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;

  const handleJoin = () => {
    //   Send API Request

    setNotificationStatus(true);
    setNewNotification({
      type: 'success',
      title: 'Success',
      message: 'You have sent a request to join the team',
    });
  };

  return (
    <TeamsCardWrapper>
      <TeamsCardImage src={teamImage} key={teamName} alt={teamName} />

      <TeamsCardInfo>
        <TeamsCardName>{teamName}</TeamsCardName>

        <TeamCardDescriptionsWrapper>
          <TeamsCardDescription>{teamMembers}</TeamsCardDescription>

          <TeamsCardDescription>{teamMatchesPlayed}</TeamsCardDescription>

          <TeamsCardDescription>{teamFoundedIn}</TeamsCardDescription>
        </TeamCardDescriptionsWrapper>
      </TeamsCardInfo>

      {!teamId ? (
        <TeamsSideOption backgroundColor="#4767f9" onClick={handleJoin}>
          <JoinButton>Join</JoinButton>
        </TeamsSideOption>
      ) : null}
    </TeamsCardWrapper>
  );
};

export default TeamsCard;
