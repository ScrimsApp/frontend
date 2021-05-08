import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  const [allPlayers, setAllPlayers] = useState(players.data);
  const [pageNumber, setPageNumber] = useState(1);

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error, isValidating, mutate } = useSWR<PlayersResponse>(
    `players?page=${pageNumber}`,
    fetcher,
    {
      initialData: players,
    }
  );

  const observableRef = useRef(null);

  useEffect(() => {
    // console.log(observableRef.current);

    if (pageNumber === players.last_page) return;

    const intersectionObserver = new IntersectionObserver(
      async (entries: Array<IntersectionObserverEntry>) => {
        const ratio = entries[0].intersectionRatio;

        // console.log(ratio);
        // console.log(entries[0].isIntersecting);

        if (
          !isValidating &&
          allPlayers.length <= players.total &&
          ratio > 0.6
        ) {
          setPageNumber((prevPage) => {
            if (prevPage < players.last_page) {
              return prevPage + 1;
            } else {
              return prevPage;
            }
          });

          const { data } = await mutate();
          setAllPlayers((prevPlayers) => [
            ...new Set([...prevPlayers, ...data]),
          ]);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (observableRef.current)
      intersectionObserver.observe(observableRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [allPlayers]);

  if (error) {
    setNotificationStatus(true);
    setNewNotification({
      type: 'error',
      title: 'Error',
      message: error,
    });
  }

  if (allPlayers?.length > 0) {
    return (
      <>
        {allPlayers.map((player) => {
          return (
            <PlayersCard
              key={player.id}
              id={player.id}
              name={player.name}
              image="https://pm1.narvii.com/6634/8d8abf66cd8164ec16c6288fa5d2c981439a0d72_hq.jpg"
              created_at={player.created_at}
              team_id={player.team_id}
            />
          );
        })}
        <div ref={observableRef} />
      </>
    );
  }

  if (isValidating) {
    return <Loading />;
  }

  return <p>There are no players registered yet :(</p>;
};

export default PlayersCardWrapper;
