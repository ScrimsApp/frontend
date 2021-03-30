import styled from 'styled-components';

import {
  TeamMemberCardWrapper,
  TeamMemberImage,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberDescription,
  SideOption,
} from '../TeamMemberCard/teamMemberCard.styles';

import { scrollStyles } from '../../styles/pages/team/team.styles';

interface MatchInvitationsWrapperProps {
  visible: boolean;
}

export const MatchInvitationsWrapper = styled.div<MatchInvitationsWrapperProps>`
  width: ${(props) => (props.visible ? '100%' : '0%')};
  display: flex;
  flex-direction: column;

  transform: ${(props) => (props.visible ? 'none' : 'translateX(-100%)')};

  transition: all 200ms ease-in-out;

  ${scrollStyles}
`;

export const MatchInvitationsCardWrapper = styled(TeamMemberCardWrapper)``;
export const MatchInvitationsCardImage = styled(TeamMemberImage)`
  width: 30% !important;
`;
export const MatchInvitationsInfo = styled(TeamMemberInfo)``;
export const MatchInvitationsName = styled(TeamMemberName)``;
export const MatchInvitationsDescription = styled(TeamMemberDescription)``;
export const MatchInvitationsSideOption = styled(SideOption)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  &:active {
    filter: none;
  }
`;
export const OptionButton = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: filter 200ms ease-in-out;

  background-color: #4767f9;

  &&:active {
    filter: brightness(80%);
  }
`;
