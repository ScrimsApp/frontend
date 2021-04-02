import { FunctionComponent } from 'react';

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

const TeamsCard: FunctionComponent<TeamsCardsProps> = ({
  teamImage,
  teamName,
  teamMembers,
  teamMatchesPlayed,
  teamFoundedIn,
}) => {
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

      <TeamsSideOption backgroundColor="#4767f9">
        <JoinButton>Join</JoinButton>
      </TeamsSideOption>
    </TeamsCardWrapper>
  );
};

export default TeamsCard;
