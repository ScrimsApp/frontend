import styled from 'styled-components';

import {
  TeamsCardWrapper,
  TeamsCardImage,
  TeamsCardInfo,
  TeamsCardName,
  TeamCardDescriptionsWrapper,
  TeamsCardDescription,
  TeamsSideOption,
  JoinButton,
} from '../TeamsCard/teamsCard.styles';

export const PlayersCardWrapper = styled(TeamsCardWrapper)``;
export const PlayersCardImage = styled(TeamsCardImage)``;
export const PlayersCardInfo = styled(TeamsCardInfo)``;
export const PlayersCardName = styled(TeamsCardName)``;
export const PlayersCardDescriptionsWrapper = styled(
  TeamCardDescriptionsWrapper
)``;
export const PlayersCardDescription = styled(TeamsCardDescription)`
  @media only screen and (max-width: 640px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;
export const PlayersSideOption = styled(TeamsSideOption)``;
export const InviteButton = styled(JoinButton)``;
