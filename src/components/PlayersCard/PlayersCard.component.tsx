import { FunctionComponent, useContext } from 'react';
import Link from 'next/link';

import { PlayersCardProps } from './types';

import {
  PlayersCardWrapper,
  PlayersCardImage,
  PlayersCardInfo,
  PlayersCardName,
  PlayersCardDescriptionsWrapper,
  PlayersCardDescription,
  PlayersSideOption,
  InviteButton,
} from './playersCard.styles';

import { GlobalContext } from '../../context/GlobalContext.';

const PlayersCard: FunctionComponent<PlayersCardProps> = ({
  id,
  image,
  name,
  team_id,
  created_at,
}) => {
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  let playerJoinedDate = new Date(created_at);

  let formatedPlayerJoinedDate = playerJoinedDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleInvite = () => {};

  return (
    <PlayersCardWrapper>
      <PlayersCardImage src={image} />
      <PlayersCardInfo>
        <PlayersCardName>{name}</PlayersCardName>

        <PlayersCardDescriptionsWrapper>
          <PlayersCardDescription>{`Joined in ${formatedPlayerJoinedDate}`}</PlayersCardDescription>
        </PlayersCardDescriptionsWrapper>
      </PlayersCardInfo>
      {user.captain && team_id ? (
        <PlayersSideOption backgroundColor="#4767f9">
          <Link href={user.token ? '' : '/signin'}>
            <InviteButton>Invite</InviteButton>
          </Link>
        </PlayersSideOption>
      ) : null}
    </PlayersCardWrapper>
  );
};

export default PlayersCard;
