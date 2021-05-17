import { FunctionComponent, useContext } from 'react';

import { MatchesCardWrapperProps } from './types';

import MatchCard from '../MatchCard/MatchCard.component';

import { GlobalContext } from '../../context/GlobalContext.';
import Loading from '../Loading/Loading.component';

import useScrollFetch from '../../hooks/useScrollFetch';

import { Match } from '../../types/match/Match.type';

export const MatchesCardWrapper: FunctionComponent<MatchesCardWrapperProps> = ({
  matches,
}) => {
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  const { allData, isLoading, error, observerRef } = useScrollFetch(
    matches.current_page,
    matches.last_page,
    matches.total,
    'match',
    matches.data
  );

  if (allData.length > 0) {
    return (
      <>
        {allData.map((match: Match) => (
          <MatchCard
            key={match.id}
            id={match.id}
            teamImage={match.image}
            title={match.name}
            description={match.description}
            hashtags={[match.format, match.tag]}
            time={match.time}
            date={match.date}
            captain={user.captain}
          />
        ))}

        {isLoading && <Loading />}

        {error && <div>Deu ruim!</div>}

        <div ref={observerRef} />
      </>
    );
  }

  return <p>There are no matches available yet :(</p>;
};

export default MatchesCardWrapper;
