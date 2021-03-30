import styled, { keyframes } from 'styled-components';

import {
  TeamCardWrapper,
  TeamCardImage,
  TeamNameWrapper,
  TeamName,
} from '../TeamCard/teamCard.styles';

const initial = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0.3;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const PlayerRequestCardWrapper = styled(TeamCardWrapper)`
  margin: 0px 20px;
  transition: all 200ms ease-in-out;
  animation: ${initial} 200ms linear forwards;

  @media only screen and (max-width: 1050px) {
    margin: 20px;
  }
`;
export const PlayerRequestCardImage = styled(TeamCardImage)``;
export const PlayerNameWrapper = styled(TeamNameWrapper)``;
export const PlayerName = styled(TeamName)``;
