import { FunctionComponent } from 'react';

import {
  PlayerInfoWrapper,
  PlayerImage,
  PlayerInfoContent,
  PlayerName,
  PlayerDescription,
} from './playerInfoCard.styles';

import { PlayerInfoCardProps } from './types';

const PlayerInfoCard: FunctionComponent<PlayerInfoCardProps> = ({
  image,
  name,
  description,
}) => {
  return (
    <PlayerInfoWrapper>
      <PlayerImage src={image} alt={name} />

      <PlayerInfoContent>
        <PlayerName>{name}</PlayerName>

        <PlayerDescription>{description}</PlayerDescription>
      </PlayerInfoContent>
    </PlayerInfoWrapper>
  );
};

export default PlayerInfoCard;
