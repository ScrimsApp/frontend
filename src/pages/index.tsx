import { useContext, useEffect, useState } from 'react';

import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  MatchesWrapper,
  SectionTitle,
} from '../styles/pages/index/index.styles';
import MatchCard from '../components/MatchCard/MatchCard.component';

import { homeContent } from '../content/home/home.content';

import Loading from '../components/Loading/Loading.component';
import { GlobalContext } from '../context/GlobalContext.';

const Home = () => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

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
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />

          <MatchCard
            title="TEAM Liquid"
            description="Partidas em mapas diversos"
            hashtags={['#r6', '#coastline', '#balatorta']}
            time="9:00 PM"
            date="03.25.21"
            captain={user.captain}
          />
        </MatchesWrapper>
      ) : (
        <Loading />
      )}
    </MainWrapper>
  );
};

export default Home;
