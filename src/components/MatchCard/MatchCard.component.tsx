import { FunctionComponent } from 'react';

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
import Link from 'next/link';

const MatchCard: FunctionComponent<MatchCardProps> = ({
  title,
  description,
  hashtags,
  time,
  date,
}) => {
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

          <ButtonWrapper minWidth="80%">
            <ButtonOverlay className="overlay" type="dark" />
            <Link passHref href="/signin">
              <LinkButton>Assign</LinkButton>
            </Link>
          </ButtonWrapper>
        </CardAssignWrapper>
      </CardInfo>
    </CardWrapper>
  );
};

export default MatchCard;
