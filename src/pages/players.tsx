import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  PlayersSectionTitle,
  PlayersWrapper,
} from '../styles/pages/players/players.styles';

const Players = () => {
  return (
    <MainWrapper>
      <Navbar />

      <PlayersSectionTitle>Players</PlayersSectionTitle>

      <PlayersWrapper>
        <h1>PlayersCardWrapper</h1>
      </PlayersWrapper>
    </MainWrapper>
  );
};

export default Players;
