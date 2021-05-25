import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';
import { useRouter } from 'next/router';

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

import { BackArrow } from '../../styles/shared/BackArrow/BackArrow.styles';

interface PlayerProps {
  playerById: PlayerResponse;
}

const Player: FunctionComponent<PlayerProps> = ({ playerById }) => {
  const router = useRouter();
  return (
    <MainWrapper>
      <Navbar />

      {playerById ? (
        <PlayerByIdWrapper>
          <BackArrow onClick={() => router.back()}>&#8592;</BackArrow>
          <PlayerByIdInfoWrapper>
            <PlayerInfoCard
              image={playerById.image}
              name={playerById.name}
              person_id={playerById.person_id}
              description={playerById.description}
              created_at={playerById.created_at}
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
