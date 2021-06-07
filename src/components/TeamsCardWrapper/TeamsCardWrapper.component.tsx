import { FunctionComponent } from 'react';

import { TeamsCardWrapperProps } from './types';

import TeamsCard from '../TeamsCard/TeamsCard.component';
import Loading from '../Loading/Loading.component';

import useScrollFetch from '../../hooks/useScrollFetch';

const TeamsCardWrapper: FunctionComponent<TeamsCardWrapperProps> = ({
  teams,
}) => {
  const { allData, observerRef, isLoading, error } = useScrollFetch(
    1,
    teams.last_page,
    teams.total,
    'teams',
    teams.data
  );

  if (allData?.length > 0) {
    return (
      <>
        {allData.map((team) => (
          <TeamsCard
            id={team.id}
            teamImage={`https://scrimsapp.tech/storage/${team.image}`}
            teamName={team.name}
            teamMembers={`${1} members`}
            teamMatchesPlayed="No matches played"
            teamFoundedIn={team.created_at}
            key={team.name}
          />
        ))}

        {isLoading && <Loading />}

        {error && <div>Deu ruim!</div>}

        <div ref={observerRef} />
      </>
    );
  }

  return <p>There are no registered teams yet :(</p>;
};

export default TeamsCardWrapper;
