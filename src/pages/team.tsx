import { FunctionComponent } from 'react';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  TeamWrapper,
  TeamInfoWrapper,
  MatchesWrapper,
  TeamMembersWrapper,
  PlayersInvitations,
} from '../styles/pages/team/team.styles';

const Team: FunctionComponent = () => {
  return (
    <MainWrapper>
      <Navbar />

      <TeamWrapper>
        <TeamInfoWrapper />

        <MatchesWrapper />

        <TeamMembersWrapper />

        <PlayersInvitations />
      </TeamWrapper>
    </MainWrapper>
  );
};

export default Team;
