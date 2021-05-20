import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';

import Navbar from '../../components/Navbar/Navbar.component';
import { MainWrapper } from '../../styles/shared/Wrapper/Wrapper.styles';
import Loading from '../../components/Loading/Loading.component';

import {
  PlayerByIdWrapper,
  PlayerByIdInfoWrapper,
} from '../../styles/pages/player/playerById.styles';

import { api } from '../../config/api';
import { PlayerResponse } from '../../types/responses/player/PlayerResponse.type';

import PlayerInfoCard from '../../components/PlayerInfocard/PlayerInfoCard.component';

interface PlayerProps {
  playerById: PlayerResponse;
}

const Player: FunctionComponent<PlayerProps> = ({ playerById }) => {
  return (
    <MainWrapper>
      <Navbar />

      {playerById ? (
        <PlayerByIdWrapper>
          <PlayerByIdInfoWrapper>
            <PlayerInfoCard
              image={playerById.image}
              name={playerById.name}
              description={'Um player muito legal muito bacana'}
            />
          </PlayerByIdInfoWrapper>
        </PlayerByIdWrapper>
      ) : (
        <Loading fullPage={true} />
      )}
    </MainWrapper>
  );
};

export default Player;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const id = params.id;

  const playerById = await api
    .get<PlayerResponse>(`player/${id}`)
    .then((res) => res.data);

  return {
    props: {
      playerById,
    },
  };
};
