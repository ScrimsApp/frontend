import { FunctionComponent, useContext } from 'react';

import { NextMatchProps } from './types';

import TeamInfoCard from '../../components/TeamInfoCard/TeamInfoCard.component';
import {
  NextMatchCardWrapper,
  NextMatchWrapper,
  NoMatchScheduled,
} from './nextMatch.styles';
import CreateMatch from '../CreateMatch/CreateMatch.component';
import { GlobalContext } from '../../context/GlobalContext.';

const NextMatch: FunctionComponent<NextMatchProps> = ({ nextMatch }) => {
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  return (
    <NextMatchWrapper>
      <NextMatchCardWrapper>
        {nextMatch.team ? (
          <TeamInfoCard
            teamImage={`http://localhost:8000/storage/${nextMatch.team.image}`}
            teamName={nextMatch.team.name}
            about={nextMatch.team.description}
            description={nextMatch.format}
            date={nextMatch.date}
            time={nextMatch.time}
            isCaptain={user.captain}
            isMatch={true}
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
