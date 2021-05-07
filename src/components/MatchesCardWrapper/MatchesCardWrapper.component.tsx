import { FunctionComponent, useContext } from 'react';
import useSWR from 'swr';

import { MatchesCardWrapperProps } from './types';

import MatchCard from '../MatchCard/MatchCard.component';
import { api } from '../../config/api';

import { MatchesResponse } from '../../types/responses/match/MatchesResponse.type';
import { GlobalContext } from '../../context/GlobalContext.';
import Loading from '../Loading/Loading.component';

export const MatchesCardWrapper: FunctionComponent<MatchesCardWrapperProps> = ({
  matches,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { user } = userContext;
  const { setNewNotification, setNotificationStatus } = notificationContext;

  const fetcher = (url: string) => api.get(url).then((res) => res.data);
  const { data, error, isValidating } = useSWR<Array<MatchesResponse>>(
    'match',
    fetcher,
    {
      initialData: matches,
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

  if (data.length > 0) {
    return (
      <>
        {data.map((match) => (
          <MatchCard
            key={match.id}
            id={match.id}
            teamImage={match.team_1.image}
            title={match.team_1.name}
            description="Partidas em mapas diversos"
            hashtags={[match.format, match.team_1.tag]}
            time={match.time}
            date={match.date}
            captain={user.captain}
          />
        ))}
      </>
    );
  }

  if (isValidating) {
    return <Loading />;
  }
};

export default MatchesCardWrapper;
