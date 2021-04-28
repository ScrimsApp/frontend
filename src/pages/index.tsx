import { FunctionComponent, useContext, useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  MatchesWrapper,
  SectionTitle,
} from '../styles/pages/index/index.styles';
import MatchCard from '../components/MatchCard/MatchCard.component';

import { homeContent } from '../content/home/home.content';

import Loading from '../components/Loading/Loading.component';
import { GlobalContext } from '../context/GlobalContext.';

import { api } from '../config/api';
import { MatchesResponse } from '../types/responses/match/MatchesResponse.type';

interface HomeProps {
  matches: Array<MatchesResponse>;
}

const Home: FunctionComponent<HomeProps> = ({ matches }) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  console.log(matches);

  useEffect(() => {
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 1000);
  });

  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>{homeContent.matches}</SectionTitle>

      <MatchesWrapper>{/* Matches Cards goes here... */}</MatchesWrapper>
    </MainWrapper>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const matches = await api
    .get<Array<MatchesResponse>>('match')
    .then((res) => res.data);

  return {
    props: {
      matches,
    },
  };
};
