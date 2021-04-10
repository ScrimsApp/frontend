import React from 'react';

import { SectionTitle } from '../styles/pages/match/match.styles';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import Navbar from '../components/Navbar/Navbar.component';
import NextMatch from '../components/NextMatch/NextMatch.component';

const Match = () => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Next match</SectionTitle>

      <NextMatch />
    </MainWrapper>
  );
};

export default Match;
