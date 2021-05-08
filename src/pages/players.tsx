import { FunctionComponent } from 'react';

import Navbar from '../components/Navbar/Navbar.component';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import {
  PlayersSectionTitle,
  PlayersWrapper,
} from '../styles/pages/players/players.styles';

import { PlayersResponse } from '../types/responses/player/PlayersResponse.type';

import PlayersCardWrapper from '../components/PlayersCardWrapper/PlayersCardWrapper.component';
import { GetServerSideProps } from 'next';
import { api } from '../config/api';

interface PlayersProps {
  players: PlayersResponse;
}

const Players: FunctionComponent<PlayersProps> = ({ players }) => {
  return (
    <MainWrapper>
      <Navbar />

      <PlayersSectionTitle>Players</PlayersSectionTitle>

      <PlayersWrapper>
        <PlayersCardWrapper players={players} />
      </PlayersWrapper>
    </MainWrapper>
  );
};

export default Players;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const players = await api
    .get<PlayersResponse>('players?page=1')
    .then((res) => res.data);

  return {
    props: {
      players,
    },
  };
};
