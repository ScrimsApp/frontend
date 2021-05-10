import { FunctionComponent } from 'react';

import { TeamsCardWrapperProps } from './types';

import TeamsCard from '../TeamsCard/TeamsCard.component';
import Loading from '../Loading/Loading.component';

import useScrollFetch from '../../hooks/useScrollFetch';

const TeamsCardWrapper: FunctionComponent<TeamsCardWrapperProps> = ({
  teams,
}) => {
  const { allData, observerRef, isLoading } = useScrollFetch(
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
            teamImage={`http://localhost:8000/storage/${team.image}`}
            teamName={team.name}
            teamMembers={`${1} members`}
            teamMatchesPlayed="7 matches played"
            teamFoundedIn={team.created_at}
            key={team.name}
          />
        ))}
        <div ref={observerRef} />
      </>
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  return <p>There are no registered teams yet :(</p>;
};

export default TeamsCardWrapper;
