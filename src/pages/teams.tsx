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

import { TeamResponse } from '../types/responses/team/TeamResponse.type';

import { api } from '../config/api';

import { teamsContent } from '../content/teams/teams.content';

interface TeamsProps {
  teams: Array<TeamResponse>;
}

const Teams: FunctionComponent<TeamsProps> = ({ teams }) => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>{teamsContent.teamsTitle}</SectionTitle>
      <TeamsWrapper>
        <TeamsCardWrapper teams={teams} />
      </TeamsWrapper>

      <SectionTitle>{teamsContent.joinedTeamsTitle}</SectionTitle>

      <RecentJoinedTeamsWrapper>
        <TeamCard
          teamName="TEAM Liquid"
          teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
        />

        <TeamCard
          teamName="TEAM Liquid"
          teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
        />

        <TeamCard
          teamName="TEAM Liquid"
          teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
        />

        <TeamCard
          teamName="TEAM Liquid"
          teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
        />
      </RecentJoinedTeamsWrapper>
    </MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const teams = await api
    .get<Array<TeamResponse>>('team')
    .then((res) => res.data);

  return {
    props: {
      teams,
    },
  };
};

export default Teams;
