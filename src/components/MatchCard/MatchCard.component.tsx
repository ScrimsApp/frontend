import { FunctionComponent, useContext } from 'react';

import { MatchCardProps } from './types';

import {
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

  const handleAssign = async () => {
    //   Send API Request
    if (user.token) {
      const response = await api.post(
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
    <CardWrapper key={id}>
      <CardImage
        alt="team"
        src={`http://localhost:8000/storage/${teamImage}`}
      />

      <CardInfo>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>

        <CardHashtagWrapper>
          {hashtags.map((hashtag) => (
            <CardHashtag key={hashtag}>{hashtag}</CardHashtag>
          ))}
        </CardHashtagWrapper>

        <CardAssignWrapper className="card-assign-detail">
          <CardAssignDetailsWrapper>
            <CardAssignDetail>Date: {date}</CardAssignDetail>
            <CardAssignDetail>Time: {time}</CardAssignDetail>
          </CardAssignDetailsWrapper>

          {captain ? (
            <ButtonWrapper minWidth="80%" onClick={handleAssign}>
              <ButtonOverlay className="overlay" type="dark" />
              <LinkButton>Assign</LinkButton>
            </ButtonWrapper>
          ) : null}
        </CardAssignWrapper>
      </CardInfo>
    </CardWrapper>
  );
};

export default MatchCard;
