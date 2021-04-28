import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  MatchesWrapper,
  SectionTitle,
} from '../styles/pages/index/index.styles';

import { homeContent } from '../content/home/home.content';

import { api } from '../config/api';
import { MatchesResponse } from '../types/responses/match/MatchesResponse.type';

import MatchesCardWrapper from '../components/MatchesCardWrapper/MatchesCardWrapper.component';

interface HomeProps {
  matches: Array<MatchesResponse>;
}

const Home: FunctionComponent<HomeProps> = ({ matches }) => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>{homeContent.matches}</SectionTitle>

      <MatchesWrapper>
        <MatchesCardWrapper matches={matches} />
      </MatchesWrapper>
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
