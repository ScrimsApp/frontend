import { FunctionComponent, useContext } from 'react';

import { MatchesCreatedProps } from './types';

import { GlobalContext } from '../../context/GlobalContext.';

import {
  MatchesCreatedWrapper,
  MatchesCreatedCardWrapper,
  MatchesCreatedCardImage,
  MatchesCreatedInfo,
  MatchesCreatedName,
  MatchesCreatedDescription,
  MatchesCreatedSideOption,
  MatchesCreatedCancelButton,
} from './matchesCreated.styles';

import { api } from '../../config/api';
import { InviteMatchResponse } from '../../types/responses/match/InviteMatchResponse.type';
import { mutate } from 'swr';

const MatchesCreated: FunctionComponent<MatchesCreatedProps> = ({
  visible,
  matchesCreated,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { user } = userContext;
  const { setNotificationStatus, setNewNotification } = notificationContext;

  const handleCancelCreatedMatch = async (id: number) => {
    if (user.token) {
      const response = await api.post<InviteMatchResponse>(
        'match/delete',
        {
          match_id: id,
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
          title: status === 200 ? 'Success' : 'Whoops!',
          message: data.message,
        });
      }

      status === 200 ? mutate('team') : null;
    }
  };

  return (
    <MatchesCreatedWrapper visible={visible}>
      {matchesCreated?.map((match) => (
        <MatchesCreatedCardWrapper key={match.id}>
          <MatchesCreatedCardImage
            alt={match.team_1.name}
            src={`http://localhost:8000/storage/${match.team_1.image}`}
          />

          <MatchesCreatedInfo>
            <MatchesCreatedName>{match.team_1.name}</MatchesCreatedName>

            <MatchesCreatedDescription>
              {match.format}
            </MatchesCreatedDescription>

            <MatchesCreatedDescription>
              {match.data} {match.time}
            </MatchesCreatedDescription>
          </MatchesCreatedInfo>

          <MatchesCreatedSideOption backgroundColor="#ED5353">
            <MatchesCreatedCancelButton
              onClick={() => handleCancelCreatedMatch(match.id)}
            >
              Cancel
            </MatchesCreatedCancelButton>
          </MatchesCreatedSideOption>
        </MatchesCreatedCardWrapper>
      ))}
    </MatchesCreatedWrapper>
  );
};

export default MatchesCreated;
