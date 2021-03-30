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
          <TeamMemberCard
            image="https://sm.ign.com/ign_br/screenshot/default/morty_ep2e.jpg"
            playerName="Morty"
            description1="Joined in 03.26.2021"
            description2="5 matches played"
          />

          <TeamMemberCard
            image="https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg"
            playerName="Rick"
            description1="Joined in 03.29.2021"
            description2="2 matches played"
          />
        </TeamMembersWrapper>

        <PlayersRequests />
      </TeamWrapper>
    </MainWrapper>
  );
};

export default Team;
