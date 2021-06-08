import styled from 'styled-components';

import { scrollStyles } from '../team/team.styles';

export const TeamsWrapper = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  box-sizing: border-box;

  @media only screen and (min-width: 640px) {
    ${scrollStyles}
    max-height: 700px;
  }

  @media only screen and (max-width: 640px) {
    max-height: auto !important;
  }
`;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.light};

  margin: 56px 0px 36px 0px;
`;

export const RecentJoinedTeamsWrapper = styled.section`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-flow: row wrap;

  padding: 0px 0px 20px 0px;
`;
