import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  MatchesWrapper,
  SectionTitle,
  TeamsWrapper,
} from '../styles/pages/index/index.styles';
import MatchCard from '../components/MatchCard/MatchCard.component';
import TeamCard from '../components/TeamCard/TeamCard.component';

import { homeContent } from '../content/home/home.content';

const Home = () => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>{homeContent.matches}</SectionTitle>

      <MatchesWrapper>
        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />

        <MatchCard
          title="TEAM Liquid"
          description="Partidas em mapas diversos"
          hashtags={['#r6', '#coastline', '#balatorta']}
          time="9:00 PM"
          date="03.25.21"
        />
      </MatchesWrapper>

      <SectionTitle>{homeContent.teams}</SectionTitle>

      <TeamsWrapper>
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
      </TeamsWrapper>
    </MainWrapper>
  );
};

export default Home;
