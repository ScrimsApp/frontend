import { FunctionComponent } from 'react';

import {
  MatchInfoWrapper,
  MatchTeamImage,
  MatchInfoContent,
  MatchTeamName,
  MatchTeamAbout,
  MatchTeamDescription,
} from './nextMatchCard.styles';

import { NextMatchCardProps } from './types';

import { parseDate } from '../../utils/functions/parseDate';

const NextMatchCard: FunctionComponent<NextMatchCardProps> = ({
  teamName,
  teamImage,
  date,
  description,
  time,
  format,
  id,
}) => {
  return (
    <MatchInfoWrapper>
      <MatchTeamImage src={teamImage} alt={teamName} />

      <MatchInfoContent>
        <MatchTeamName>{teamName}</MatchTeamName>

        <MatchTeamAbout>{description}</MatchTeamAbout>

        <MatchTeamDescription>{format}</MatchTeamDescription>

        <MatchTeamDescription>{`${parseDate(
          date
        )} ${time}`}</MatchTeamDescription>
      </MatchInfoContent>
    </MatchInfoWrapper>
  );
};

export default NextMatchCard;
