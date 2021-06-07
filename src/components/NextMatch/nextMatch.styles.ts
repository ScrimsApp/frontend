import styled from 'styled-components';

import {
  TeamWrapper,
  TeamInfoWrapper,
} from '../../styles/pages/team/team.styles';

export const NextMatchWrapper = styled(TeamWrapper)`
  flex-wrap: nowrap;

  margin-bottom: 56px;

  @media only screen and (max-width: 1050px) {
    flex-direction: row;
  }

  @media only screen and (max-width: 980px) {
    flex-direction: column;
  }
`;

export const NextMatchCardWrapper = styled(TeamInfoWrapper)`
  width: 60%;
  height: 350px;
  max-height: 350px;

  margin-bottom: 0px;

  @media only screen and (max-width: 980px) {
    margin-bottom: 36px;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: 700px;
    max-height: 700px;
  }
`;

export const NoMatchScheduled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
