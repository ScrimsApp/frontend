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

import { parseDate } from '../../utils/functions/parseDate';

const TeamInfoCard: FunctionComponent<TeamInfoCardProps> = ({
  teamImage,
  teamName,
  about,
  description,
  date,
  time,
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

        <TeamDescription>{`${parseDate(date)} ${time}`}</TeamDescription>
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
