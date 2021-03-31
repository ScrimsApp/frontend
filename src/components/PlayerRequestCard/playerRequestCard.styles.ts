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
export const PlayerNameWrapper = styled(TeamNameWrapper)`
  padding: 0px !important;
`;
export const PlayerName = styled(TeamName)`
  width: 70%;

  margin-left: 15px;
`;

export const Options = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  margin-right: 15px;
`;
export const OptionButton = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 200ms ease-in-out;

  background-color: #9161ff;

  cursor: pointer;

  &&:active {
    filter: brightness(80%);
  }

  svg {
    width: 50%;
  }
`;
