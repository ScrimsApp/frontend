import { FunctionComponent } from 'react';
import { GetServerSideProps } from 'next';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';
import {
  RecentJoinedTeamsWrapper,
  SectionTitle,
  TeamsWrapper,
} from '../styles/pages/teams/teams.styles';

import TeamCard from '../components/TeamCard/TeamCard.component';

import TeamsCardWrapper from '../components/TeamsCardWrapper/TeamsCardWrapper.component';

import { TeamsResponse } from '../types/responses/team/TeamsResponse.type';

import { api } from '../config/api';

import { teamsContent } from '../content/teams/teams.content';

interface TeamsProps {
  teams: TeamsResponse;
}

const Teams: FunctionComponent<TeamsProps> = ({ teams }) => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>{teamsContent.teamsTitle}</SectionTitle>
      <TeamsWrapper>
        <TeamsCardWrapper teams={teams} />
      </TeamsWrapper>
    </MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teams = await api
    .get<TeamsResponse>('teams?page=1')
    .then((res) => res.data);

  return {
    props: {
      teams,
    },
  };
};

export default Teams;
