import { FunctionComponent, useEffect, useState } from 'react';

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
import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';
import Link from 'next/link';

const NextMatchCard: FunctionComponent<NextMatchCardProps> = ({
  teamName,
  teamImage,
  date,
  description,
  time,
  format,
  id,
}) => {
  const [timeLeft, setTimeLeft] = useState(0);

  useEffect(() => {
    const matchDate = new Date(`${date} ${time}`);
    const matchTimeInMilliseconds = matchDate.getTime() - Date.now();
    const matchTimeInSeconds = Math.floor(matchTimeInMilliseconds / 1000);

    setTimeLeft(matchTimeInSeconds);
  }, []);

  return (
    <MatchInfoWrapper>
      <MatchTeamImage src={teamImage} alt={teamName} />

      <MatchInfoContent>
        <MatchTeamName>{teamName}</MatchTeamName>

        <MatchTeamAbout>{description}</MatchTeamAbout>

        <MatchTeamDescription>{format}</MatchTeamDescription>

        <MatchTeamDescription>
          {`${parseDate(date)} ${time}`}
        </MatchTeamDescription>

        {timeLeft <= 1800 ? (
          <Link href={`/match/${id}`}>
            <ButtonWrapper
              minWidth="100%"
              margin={['0px', '0px', '0px', '0px']}
            >
              <ButtonOverlay className="overlay" type="primary" sign />
              <Button type={'button'}>Play now!</Button>

              <Button type="button">Ask captain</Button>
            </ButtonWrapper>
          </Link>
        ) : null}
      </MatchInfoContent>
    </MatchInfoWrapper>
  );
};

export default NextMatchCard;
