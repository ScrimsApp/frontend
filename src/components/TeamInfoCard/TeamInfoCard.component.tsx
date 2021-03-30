import { FunctionComponent } from 'react';

import {
  TeamInfoWrapper,
  TeamImage,
  TeamInfoContent,
  TeamName,
  TeamAbout,
  TeamDescription,
} from './teamInfoCard.styles';
import { TeamInfoCardProps } from './types';

const TeamInfoCard: FunctionComponent<TeamInfoCardProps> = ({
  teamImage,
  teamName,
  about,
  description,
  description2,
  description3,
}) => {
  return (
    <TeamInfoWrapper>
      <TeamImage src={teamImage} alt={teamName} />

      <TeamInfoContent>
        <TeamName>{teamName}</TeamName>

        <TeamAbout>{about}</TeamAbout>

        <TeamDescription>{description}</TeamDescription>

        <TeamDescription>{description2}</TeamDescription>

        <TeamDescription>{description3}</TeamDescription>
      </TeamInfoContent>
    </TeamInfoWrapper>
  );
};

export default TeamInfoCard;
