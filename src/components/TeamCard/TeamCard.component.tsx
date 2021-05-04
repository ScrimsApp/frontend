import { FunctionComponent } from 'react';
import {
  TeamCardImage,
  TeamCardWrapper,
  TeamNameWrapper,
  TeamName,
} from './teamCard.styles';

import { TeamCardProps } from './types';

const TeamCard: FunctionComponent<TeamCardProps> = ({
  teamImage,
  teamName,
}) => {
  return (
    <TeamCardWrapper>
      <TeamCardImage src={teamImage} alt={teamName} />

      <TeamNameWrapper>
        <TeamName>{teamName}</TeamName>
      </TeamNameWrapper>
    </TeamCardWrapper>
  );
};

export default TeamCard;
