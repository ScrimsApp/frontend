import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  MatchesWrapper,
  SectionTitle,
} from '../styles/pages/index/index.styles';
import MatchCard from '../components/MatchCard/MatchCard.component';

import { homeContent } from '../content/home/home.content';
import { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading.component';

const Home = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsContentLoaded(true);
    }, 1000);
  });

  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>{homeContent.matches}</SectionTitle>

      {isContentLoaded ? (
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
      ) : (
        <Loading />
      )}
    </MainWrapper>
  );
};

export default Home;
