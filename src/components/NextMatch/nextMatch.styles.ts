import styled from 'styled-components';

import {
  TeamWrapper,
  TeamInfoWrapper,
} from '../../styles/pages/team/team.styles';

export const NextMatchWrapper = styled(TeamWrapper)``;

export const NextMatchCardWrapper = styled(TeamInfoWrapper)`
  width: 65%;
  height: auto;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
