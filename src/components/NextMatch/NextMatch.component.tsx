import { FunctionComponent } from 'react';

import { NextMatchProps } from './types';

import {
  NextMatchCardWrapper,
  NextMatchWrapper,
  NoMatchScheduled,
} from './nextMatch.styles';
import CreateMatch from '../CreateMatch/CreateMatch.component';

import NextMatchCard from '../NextMatchCard/NextMatchcard.component';

const NextMatch: FunctionComponent<NextMatchProps> = ({ nextMatch }) => {
  return (
    <NextMatchWrapper>
      <NextMatchCardWrapper>
        {nextMatch.team ? (
          <NextMatchCard
            id={nextMatch.id}
            teamImage={`http://localhost:8000/storage/${nextMatch.team.image}`}
            teamName={nextMatch.team.name}
            description={nextMatch.team.description}
            date={nextMatch.date}
            time={nextMatch.time}
            format={nextMatch.format}
          />
        ) : (
          <NoMatchScheduled>
            <span>No match scheduled</span>
          </NoMatchScheduled>
        )}
      </NextMatchCardWrapper>

      <CreateMatch isCaptain={true} />
    </NextMatchWrapper>
  );
};

export default NextMatch;
