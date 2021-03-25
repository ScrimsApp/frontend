import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import MatchCard from '../components/MatchCard/MatchCard.component';
import {
  MatchesWrapper,
  SectionTitle,
  TeamsWrapper,
} from '../styles/pages/index/index.styles';
import TeamCard from '../components/TeamCard/TeamCard.component';

const Home = () => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Comming up matches</SectionTitle>

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

      <SectionTitle>Recent joined teams</SectionTitle>

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
