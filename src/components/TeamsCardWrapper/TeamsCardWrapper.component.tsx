import { FunctionComponent, useContext } from 'react';
import useSWR from 'swr';

import { TeamsCardWrapperProps } from './types';

import { api } from '../../config/api';
import { TeamResponse } from '../../types/responses/team/TeamResponse.type';

import TeamsCard from '../TeamsCard/TeamsCard.component';
import Loading from '../Loading/Loading.component';
import { GlobalContext } from '../../context/GlobalContext.';

const TeamsCardWrapper: FunctionComponent<TeamsCardWrapperProps> = ({
  teams,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error } = useSWR<Array<TeamResponse>>(`team`, fetcher, {
    initialData: teams,
  });

  if (error) {
    setNotificationStatus(true);
    setNewNotification({
      type: 'success',
      title: 'Success',
      message: error,
    });
  }

  if (data) {
    return data.map((team) => (
      <TeamsCard
        id={team.id}
        teamImage="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
        teamName={team.name}
        teamMembers={`${team.players?.length || 1} members`}
        teamMatchesPlayed="7 matches played"
        teamFoundedIn={team.created_at}
        key={team.name}
        teamId={user.teamId}
        isLoggedIn={!!user.token}
      />
    ));
  }

  return <Loading />;
};

export default TeamsCardWrapper;
