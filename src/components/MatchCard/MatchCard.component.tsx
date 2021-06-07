import { FunctionComponent, useContext } from 'react';

import { MatchCardProps } from './types';

import {
  AssignButtonWrapper,
  CardAssignDetail,
  CardAssignDetailsWrapper,
  CardAssignWrapper,
  CardDescription,
  CardHashtag,
  CardHashtagWrapper,
  CardImage,
  CardInfo,
  CardTitle,
  CardWrapper,
} from './matchCard.styles';

import {
  ButtonOverlay,
  ButtonWrapper,
  LinkButton,
} from '../../styles/shared/Button/Button.styles';

import { GlobalContext } from '../../context/GlobalContext.';

import { api } from '../../config/api';
import { InviteMatchResponse } from '../../types/responses/match/InviteMatchResponse.type';

const MatchCard: FunctionComponent<MatchCardProps> = ({
  id,
  teamImage,
  title,
  description,
  hashtags,
  time,
  date,
  captain,
}) => {
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  let matchDate = new Date(date);

  let formatedMatchDate = matchDate.toLocaleString('en-US', {
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  });

  const handleAssign = async () => {
    if (user.token) {
      const response = await api.post<InviteMatchResponse>(
        'invite/match',
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

      setNotificationStatus(true);
      setNewNotification({
        type: status === 200 ? 'success' : 'error',
        title: status === 200 ? 'Success' : 'Whoops',
        message: data.message,
      });
    }
  };

  return (
    <CardWrapper>
      <CardImage
        alt="team"
        src={`https://scrimsapp.tech/storage/${teamImage}`}
      />

      <CardInfo>
        <CardHashtagWrapper>
          {hashtags.map((hashtag) => (
            <CardHashtag key={hashtag}>{hashtag}</CardHashtag>
          ))}
        </CardHashtagWrapper>

        <CardTitle>{title}</CardTitle>

        <CardDescription
          className={description?.length >= 60 ? 'textStyles' : ''}
        >
          {description}
        </CardDescription>

        <CardAssignDetailsWrapper>
          <CardAssignDetail>{formatedMatchDate}</CardAssignDetail>
          <CardAssignDetail>{time}</CardAssignDetail>
        </CardAssignDetailsWrapper>

        {captain ? (
          <AssignButtonWrapper>
            <ButtonWrapper minWidth="50%" onClick={handleAssign} brighter>
              <ButtonOverlay className="overlay" type="secondary" />
              <LinkButton>Assign</LinkButton>
            </ButtonWrapper>
          </AssignButtonWrapper>
        ) : null}
      </CardInfo>
    </CardWrapper>
  );
};

export default MatchCard;
