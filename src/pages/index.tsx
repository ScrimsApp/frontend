import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import MatchCard from '../components/MatchCard/MatchCard.component';
import {
  MatchesWrapper,
  SectionTitle,
} from '../styles/pages/index/index.styles';

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
      </MatchesWrapper>
    </MainWrapper>
  );
};

export default Home;
