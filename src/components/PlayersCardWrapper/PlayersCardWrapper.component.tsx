import { FunctionComponent, useContext } from 'react';

import { PlayersCardWrapperProps } from './types';

import PlayersCard from '../PlayersCard/PlayersCard.component';
import Loading from '../Loading/Loading.component';

import useScrollFetch from '../../hooks/useScrollFetch';

const PlayersCardWrapper: FunctionComponent<PlayersCardWrapperProps> = ({
  players,
}) => {
  const { allData, isLoading, observerRef, error } = useScrollFetch(
    1,
    players.last_page,
    players.total,
    'players',
    players.data
  );

  if (allData?.length > 0) {
    return (
      <>
        {allData.map((player) => {
          return (
            <PlayersCard
              key={player.id}
              id={player.id}
              person_id={player.person_id}
              name={player.name}
              image={player.image}
              created_at={player.created_at}
              team_id={player.team_id}
            />
          );
        })}

        {isLoading && <Loading />}

        {error && <div>Deu ruim!</div>}

        <div ref={observerRef} />
      </>
    );
  }

  return <p>There are no players registered yet :(</p>;
};

export default PlayersCardWrapper;
