import { FunctionComponent } from 'react';
import {
  PlayerRequestCardWrapper,
  PlayerRequestCardImage,
  PlayerNameWrapper,
  PlayerName,
} from './playerRequestCard.styles';

import { PlayerRequestCardProps } from './types';

const PlayerRequestCard: FunctionComponent<PlayerRequestCardProps> = ({
  playerImage,
  playerName,
}) => {
  return (
    <PlayerRequestCardWrapper>
      <PlayerRequestCardImage src={playerImage} alt="Team Logo" />

      <PlayerNameWrapper>
        <PlayerName>{playerName}</PlayerName>
      </PlayerNameWrapper>
    </PlayerRequestCardWrapper>
  );
};

export default PlayerRequestCard;
