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

const MatchCard: FunctionComponent<MatchCardProps> = ({
  title,
  description,
  hashtags,
  time,
  date,
  captain,
}) => {
  const { notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;

  const handleAssign = () => {
    //   Send API Request

    setNotificationStatus(true);
    setNewNotification({
      type: 'success',
      title: 'Success',
      message: 'You have assigned to this match',
    });
  };

  return (
    <CardWrapper>
      <CardImage
        alt="team"
        src="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
      />

      <CardInfo>
        <CardTitle>{title}</CardTitle>

        <CardDescription>{description}</CardDescription>

        <CardHashtagWrapper>
          {hashtags.map((hashtag) => (
            <CardHashtag>{hashtag}</CardHashtag>
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
