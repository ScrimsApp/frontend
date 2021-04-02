import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';
import {
  RecentJoinedTeamsWrapper,
  SectionTitle,
  TeamsWrapper,
} from '../styles/pages/teams/teams.styles';

import TeamsCard from '../components/TeamsCard/TeamsCard.component';
import TeamCard from '../components/TeamCard/TeamCard.component';

const Teams = () => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Teams playing</SectionTitle>
      <TeamsWrapper>
        <TeamsCard
          teamImage="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
          teamName="TEAM Liquid"
          teamMembers="7 members"
          teamMatchesPlayed="7 matches played"
          teamFoundedIn="Founded in March 26 2021"
          key="TEAM Liquid"
        />

        <TeamsCard
          teamImage="https://i.ytimg.com/vi/qgoiQ3X4Rx4/maxresdefault.jpg"
          teamName="Fnatic"
          teamMembers="4 members"
          teamMatchesPlayed="3 matches played"
          teamFoundedIn="Founded in March 29 2021"
          key="Fnatic"
        />

        <TeamsCard
          teamImage="https://image.freepik.com/vetores-gratis/modelo-de-logotipo-de-gorila_20684-117.jpg"
          teamName="Gorillaz eSports"
          teamMembers="7 members"
          teamMatchesPlayed="7 matches played"
          teamFoundedIn="Founded in March 26 2021"
          key="Gorillaz eSports"
        />

        <TeamsCard
          teamImage="https://images-platform.99static.com//nYcuWsS5ha7qMWso-ctDNuf8CFQ=/68x72:939x943/fit-in/500x500/99designs-contests-attachments/97/97584/attachment_97584402"
          teamName="Dhara Team"
          teamMembers="7 members"
          teamMatchesPlayed="7 matches played"
          teamFoundedIn="Founded in March 26 2021"
          key="Dhara Team"
        />

        <TeamsCard
          teamImage="https://i.ytimg.com/vi/qgoiQ3X4Rx4/maxresdefault.jpg"
          teamName="Fnatic"
          teamMembers="4 members"
          teamMatchesPlayed="3 matches played"
          teamFoundedIn="Founded in March 29 2021"
          key="Fnatic"
        />

        <TeamsCard
          teamImage="https://i.ytimg.com/vi/qgoiQ3X4Rx4/maxresdefault.jpg"
          teamName="Fnatic"
          teamMembers="4 members"
          teamMatchesPlayed="3 matches played"
          teamFoundedIn="Founded in March 29 2021"
          key="Fnatic"
        />
      </TeamsWrapper>

      <SectionTitle>Recent Joined Teams</SectionTitle>

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

export default Teams;
