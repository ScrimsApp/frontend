import styled from 'styled-components';

import { scrollStyles } from '../team/team.styles';

export const TeamsWrapper = styled.section`
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
`;

export const SectionTitle = styled.h2`
  width: 100%;
  text-align: left;
  font-size: 28px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.light};

  margin: 56px 0px 36px 0px;
`;
