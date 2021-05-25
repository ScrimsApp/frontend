import { FunctionComponent } from 'react';

import {
  PlayerInfoWrapper,
  PlayerImage,
  PlayerInfoContent,
  PlayerName,
  PlayerPersonId,
  PlayerDescription,
} from './playerInfoCard.styles';

import { PlayerInfoCardProps } from './types';

const PlayerInfoCard: FunctionComponent<PlayerInfoCardProps> = ({
  image,
  name,
  person_id,
  description,
  created_at,
}) => {
  let playerJoinedInDate = new Date(created_at);

  let formatedPlayerJoinedInDate = playerJoinedInDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <PlayerInfoWrapper>
      <PlayerImage src={image} alt={name} />

      <PlayerInfoContent>
        <PlayerName>
          {name} <PlayerPersonId>{person_id}</PlayerPersonId>
        </PlayerName>

        <PlayerDescription>{description}</PlayerDescription>

        <PlayerDescription>{`Joined in ${formatedPlayerJoinedInDate}`}</PlayerDescription>
      </PlayerInfoContent>
    </PlayerInfoWrapper>
  );
};

export default PlayerInfoCard;
