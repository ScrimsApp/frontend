import { FunctionComponent } from 'react';

import {
  TeamMemberCardWrapper,
  TeamMemberImage,
  TeamMemberInfo,
  TeamMemberName,
  TeamMemberDescription,
  SideOption,
  RemoveButton,
} from './teamMemberCard.styles';

const TeamMemberCard: FunctionComponent = () => {
  return (
    <TeamMemberCardWrapper>
      <TeamMemberImage
        src="https://i2.wp.com/androidmag.de/wp-content/uploads/2016/02/Pocket-Mortys-Logo.png?fit=300%2C300&ssl=1"
        alt="Team member"
      />

      <TeamMemberInfo>
        <TeamMemberName>vinisaveg</TeamMemberName>
        <TeamMemberDescription>Joined in 03.26.2021</TeamMemberDescription>
        <TeamMemberDescription>5 matches played</TeamMemberDescription>
      </TeamMemberInfo>

      <SideOption backgroundColor="#ED5353">
        <RemoveButton>Remove</RemoveButton>
      </SideOption>
    </TeamMemberCardWrapper>
  );
};

export default TeamMemberCard;
