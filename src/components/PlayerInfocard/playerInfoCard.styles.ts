import styled from 'styled-components';

import {
  TeamInfoWrapper,
  TeamImage,
  TeamInfoContent,
  TeamName,
  TeamDescription,
} from '../TeamInfoCard/teamInfoCard.styles';

export const PlayerInfoWrapper = styled(TeamInfoWrapper)``;
export const PlayerImage = styled(TeamImage)``;
export const PlayerInfoContent = styled(TeamInfoContent)``;
export const PlayerName = styled(TeamName)``;
export const PlayerPersonId = styled.span`
  color: ${(props) => props.theme.colors.secondary};
  margin-left: 5px;

  font-size: 16px;
`;
export const PlayerDescription = styled(TeamDescription)``;
