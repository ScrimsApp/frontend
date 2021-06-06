import { useRouter } from 'next/router';
import { useContext, useEffect, useState } from 'react';

import { GlobalContext } from '../../context/GlobalContext.';

import { MainWrapper } from '../../styles/shared/Wrapper/Wrapper.styles';
import Navbar from '../../components/Navbar/Navbar.component';
import Loading from '../../components/Loading/Loading.component';

import { api } from '../../config/api';

import { MatchResponse } from '../../types/responses/match/MatchResponse.type';

import MatchWrapper from '../../components/MatchWrapper/MatchWrapper.component';
import { SectionTitle } from '../../styles/pages/match/match.styles';

const Match = () => {
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;
  const router = useRouter();
  const { id } = router.query;
  const [shouldLoad, setShouldLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [match, setMatch] = useState({} as MatchResponse);

  useEffect(() => {
    if (user.token && shouldLoad && id) {
      api
        .get<MatchResponse>(`match/${id}`, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setMatch(res.data);
          setShouldLoad(false);
          setIsLoading(false);
        })
        .catch((error) => {
          router.push('/');
        });
    } else {
      const userInfo = window.localStorage.getItem('user');
      if (!userInfo) {
        router.push('/');
      }
    }
  }, [user, id]);

  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Playing now</SectionTitle>

      {!isLoading ? (
        <MatchWrapper match={match} />
      ) : (
        <Loading fullPage={true} />
      )}
    </MainWrapper>
  );
};

export default Match;
