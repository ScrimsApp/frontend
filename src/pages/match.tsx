import React, { useContext, useEffect, useState } from 'react';

import { SectionTitle } from '../styles/pages/match/match.styles';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import Navbar from '../components/Navbar/Navbar.component';
import NextMatch from '../components/NextMatch/NextMatch.component';

import { api } from '../config/api';
import { NextMatchResponse } from '../types/responses/match/NextMatchResponse.type';
import { GlobalContext } from '../context/GlobalContext.';

import Loading from '../components/Loading/Loading.component';
import { useRouter } from 'next/router';

const Match = () => {
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;
  const router = useRouter();

  const [nextMatch, setNextMatch] = useState({} as NextMatchResponse);
  const [shouldLoad, setShouldLoad] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user.token && shouldLoad) {
      api
        .get<NextMatchResponse>('match', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((res) => {
          setNextMatch(res.data);
          setShouldLoad(false);
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
        });
    }
  }, [user]);

  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Next match</SectionTitle>

      {!isLoading ? (
        <NextMatch nextMatch={nextMatch} />
      ) : (
        <Loading fullPage={true} />
      )}
    </MainWrapper>
  );
};

export default Match;
