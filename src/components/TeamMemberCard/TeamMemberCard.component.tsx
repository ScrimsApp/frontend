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
import { TeamMemberCardProps } from './types';

const TeamMemberCard: FunctionComponent<TeamMemberCardProps> = ({
  image,
  playerName,
  description1,
  description2,
}) => {
  return (
    <TeamMemberCardWrapper>
      <TeamMemberImage src={image} alt={playerName} />

      <TeamMemberInfo>
        <TeamMemberName>{playerName}</TeamMemberName>
        <TeamMemberDescription>{description1}</TeamMemberDescription>
        <TeamMemberDescription>{description2}</TeamMemberDescription>
      </TeamMemberInfo>

      <SideOption backgroundColor="#ED5353">
        <RemoveButton>Remove</RemoveButton>
      </SideOption>
    </TeamMemberCardWrapper>
  );
};

export default TeamMemberCard;
