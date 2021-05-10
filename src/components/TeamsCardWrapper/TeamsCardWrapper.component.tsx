import {
  FunctionComponent,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react';
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
  const [allTeams, setAllTeams] = useState(teams.data);
  const [pageNumber, setPageNumber] = useState(1);

  const observerRef = useRef(null);

  const fetcher = (url: string) => api.get(url).then((res) => res.data);

  const { data, error, isValidating, mutate } = useSWR<TeamsResponse>(
    `teams?page=${pageNumber}`,
    fetcher,
    {
      initialData: teams,
    }
  );

  useEffect(() => {
    if (pageNumber === teams.last_page) return;

    const intersectionObserver = new IntersectionObserver(
      async (entries: Array<IntersectionObserverEntry>) => {
        const ratio = entries[0].intersectionRatio;

        if (!isValidating && ratio > 0.6 && allTeams.length < teams.total) {
          setPageNumber((prevPage) => {
            if (prevPage < teams.last_page) {
              return prevPage + 1;
            } else {
              return prevPage;
            }
          });

          const { data } = await mutate();
          setAllTeams((prevTeams) => [...new Set([...prevTeams, ...data])]);
        }
      },
      {
        threshold: 0.6,
      }
    );

    if (observerRef.current) intersectionObserver.observe(observerRef.current);

    return () => {
      intersectionObserver.disconnect();
    };
  }, [allTeams]);

  if (error) {
    setNotificationStatus(true);
    setNewNotification({
      type: 'error',
      title: 'Error',
      message: error,
    });
  }

  if (allTeams?.length > 0) {
    return (
      <>
        {allTeams.map((team) => (
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

  if (isValidating) {
    return <Loading />;
  }

  return <p>There are no registered teams yet :(</p>;
};

export default TeamsCardWrapper;
