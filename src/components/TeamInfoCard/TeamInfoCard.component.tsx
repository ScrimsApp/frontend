import { FunctionComponent } from 'react';

import {
  TeamInfoWrapper,
  TeamImage,
  TeamInfoContent,
  TeamName,
  TeamAbout,
  TeamDescription,
  SideOption,
  CancelButton,
} from './teamInfoCard.styles';

import { TeamInfoCardProps } from './types';

const TeamInfoCard: FunctionComponent<TeamInfoCardProps> = ({
  teamImage,
  teamName,
  about,
  description,
  description2,
  description3,
  isMatch,
  isCaptain,
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

      {isMatch && isCaptain ? (
        <SideOption backgroundColor="#ED5353">
          <CancelButton>Cancel</CancelButton>
        </SideOption>
      ) : null}
    </TeamInfoWrapper>
  );
};

export default TeamInfoCard;
