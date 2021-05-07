import { FunctionComponent, useContext } from 'react';
import useSWR from 'swr';

import { api } from '../../config/api';
import { PlayersResponse } from '../../types/responses/player/PlayersResponse.type';

import { PlayersCardWrapperProps } from './types';

import PlayersCard from '../PlayersCard/PlayersCard.component';
import Loading from '../Loading/Loading.component';
import { GlobalContext } from '../../context/GlobalContext.';

const PlayersCardWrapper: FunctionComponent<PlayersCardWrapperProps> = ({
  players,
}) => {
  const { notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error, isValidating } = useSWR<PlayersResponse>(
    'players',
    fetcher,
    {
      initialData: players,
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

  if (data.data?.length > 0) {
    return (
      <>
        {data.data.map((player) => (
          <PlayersCard
            key={player.id}
            id={player.id}
            name={player.name}
            image="https://pm1.narvii.com/6634/8d8abf66cd8164ec16c6288fa5d2c981439a0d72_hq.jpg"
            created_at={player.created_at}
            team_id={player.team_id}
          />
        ))}
      </>
    );
  }

  if (isValidating) {
    return <Loading />;
  }

  return <p>There are no players registered yet :(</p>;
};

export default PlayersCardWrapper;
