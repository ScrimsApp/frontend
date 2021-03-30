import { FunctionComponent } from 'react';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  TeamWrapper,
  TeamInfoWrapper,
  MatchesWrapper,
  TeamMembersWrapper,
  PlayersRequests,
} from '../styles/pages/team/team.styles';

import TeamInfoCard from '../components/TeamInfoCard/TeamInfoCard.component';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard.component';

const Team: FunctionComponent = () => {
  return (
    <MainWrapper>
      <Navbar />

      <TeamWrapper>
        <TeamInfoWrapper>
          <TeamInfoCard />
        </TeamInfoWrapper>

        <MatchesWrapper />

        <TeamMembersWrapper>
          <TeamMemberCard />

          <TeamMemberCard />
        </TeamMembersWrapper>

        <PlayersRequests />
      </TeamWrapper>
    </MainWrapper>
  );
};

export default Team;
