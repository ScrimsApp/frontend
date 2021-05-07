import { FunctionComponent, useContext } from 'react';
import useSWR from 'swr';

import { TeamsCardWrapperProps } from './types';

import { api } from '../../config/api';
import { TeamsResponse } from '../../types/responses/team/TeamsResponse.type';

import TeamsCard from '../TeamsCard/TeamsCard.component';
import Loading from '../Loading/Loading.component';
import { GlobalContext } from '../../context/GlobalContext.';

const TeamsCardWrapper: FunctionComponent<TeamsCardWrapperProps> = ({
  teams,
}) => {
  const { notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error, isValidating } = useSWR<TeamsResponse>(
    `teams`,
    fetcher,
    {
      initialData: teams,
    }
  );

  if (error) {
    setNotificationStatus(true);
    setNewNotification({
      type: 'error',
      title: 'Error',
      message: error,
    });
  }

  if (data?.data?.length > 0) {
    return (
      <>
        {data.data.map((team) => (
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
      </>
    );
  }

  if (isValidating) {
    return <Loading />;
  }

  return <p>There are no teams yet :(</p>;
};

export default TeamsCardWrapper;
