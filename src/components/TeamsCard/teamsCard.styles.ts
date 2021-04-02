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

export const TeamsCardWrapper = styled(TeamMemberCardWrapper)`
  height: 110px;
  min-height: 110px;

  @media only screen and (max-width: 690px) {
    height: 90px;
    min-height: 90px;
  }

  @media only screen and (max-width: 640px) {
    height: 150px;
    min-height: 150px;
  }
`;

export const TeamsCardImage = styled(TeamMemberImage)`
  width: 80px;
  height: 80px;

  @media only screen and (max-width: 690px) {
    width: 70px;
    height: 70px;
  }

  @media only screen and (max-width: 640px) {
    width: 90px;
    height: 90px;
  }

  @media only screen and (max-width: 410px) {
    width: 60px;
    height: 60px;
  }
`;

export const TeamsCardInfo = styled(TeamMemberInfo)`
  width: 100%;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 640px) {
  }
`;

export const TeamsCardName = styled(TeamMemberName)`
  margin-bottom: 0px;
  margin-right: 15px;
  width: 20%;
`;

export const TeamCardDescriptionsWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media only screen and (max-width: 640px) {
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }

  @media only screen and (max-width: 500px) {
    width: 60%;
  }
`;

export const TeamsCardDescription = styled(TeamMemberDescription)`
  margin-bottom: 0px;
  margin-right: 15px;

  &&:last-child {
    margin-bottom: 0px;
    margin-right: 0px;
  }

  @media only screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

export const TeamsSideOption = styled(SideOption)``;

export const JoinButton = styled(RemoveButton)``;
