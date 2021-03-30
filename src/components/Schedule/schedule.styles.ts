import styled from 'styled-components';

import {
  TeamMemberCardWrapper,
  TeamMemberImage,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberDescription,
  SideOption,
  RemoveButton,
} from '../TeamMemberCard/teamMemberCard.styles';

import { scrollStyles } from '../../styles/pages/team/team.styles';

interface ScheduleWrapperProps {
  visible: boolean;
}

export const ScheduleWrapper = styled.div<ScheduleWrapperProps>`
  width: ${(props) => (props.visible ? '100%' : '0%')};
  display: flex;
  flex-direction: column;

  transform: ${(props) => (props.visible ? 'none' : 'translateX(100%)')};

  transition: all 200ms ease-in-out;

  ${scrollStyles}
`;

export const ScheduleCardWrapper = styled(TeamMemberCardWrapper)``;
export const ScheduleCardImage = styled(TeamMemberImage)`
  width: 30% !important;
`;
export const ScheduleInfo = styled(TeamMemberInfo)``;
export const ScheduleName = styled(TeamMemberName)``;
export const ScheduleDescription = styled(TeamMemberDescription)``;
export const ScheduleSideOption = styled(SideOption)``;
export const CancelButton = styled(RemoveButton)``;
