import { FunctionComponent, useContext, useEffect, useState } from 'react';
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
import { api } from '../../config/api';
import { InvitePlayerResponse } from '../../types/responses/player/InvitePlayerResponse.type';

const PlayersCard: FunctionComponent<PlayersCardProps> = ({
  id,
  image,
  name,
  team_id,
  created_at,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNewNotification, setNotificationStatus } = notificationContext;
  const { user } = userContext;
  const [cardLink, setCardLink] = useState('');

  let playerJoinedDate = new Date(created_at);

  let formatedPlayerJoinedDate = playerJoinedDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleInvite = async () => {
    if (!cardLink && !user.token) {
      setCardLink('/signin');
      return;
    }

    if (!cardLink && user.token) {
      setCardLink('#');
      return;
    }

    if (user.token) {
      const response = await api.post<InvitePlayerResponse>(
        'invite/player',
        {
          type: 'team',
          user_id: id,
        },
        {
          headers: {
            Authorization: 'Bearer ' + user.token,
          },
        }
      );

      const { data, status } = response;

      if (data) {
        setNotificationStatus(true);
        setNewNotification({
          type: status === 200 ? 'success' : 'error',
          title: status === 200 ? 'Success' : 'Whoops',
          message: data.message,
        });
      }
    }
  };

  useEffect(() => {
    const { innerWidth } = window;

    if (innerWidth <= 640) {
      return;
    } else {
      setCardLink('/signin');
    }
  });

  return (
    <PlayersCardWrapper>
      <PlayersCardImage src={image} />
      <PlayersCardInfo>
        <PlayersCardName>{name}</PlayersCardName>

        <PlayersCardDescriptionsWrapper>
          <PlayersCardDescription>{`Joined in ${formatedPlayerJoinedDate}`}</PlayersCardDescription>
        </PlayersCardDescriptionsWrapper>
      </PlayersCardInfo>
      {user.captain && !team_id ? (
        <PlayersSideOption backgroundColor="#4767f9">
          <Link href={user.token ? '' : cardLink}>
            <InviteButton onClick={handleInvite}>Invite</InviteButton>
          </Link>
        </PlayersSideOption>
      ) : null}
    </PlayersCardWrapper>
  );
};

export default PlayersCard;
