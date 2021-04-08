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
  isCaptain,
}) => {
  let playerJoinedInDate = new Date(description1);

  let formatedPlayerJoinedInDate = playerJoinedInDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const handleTeamMember = () => {};

  return (
    <TeamMemberCardWrapper>
      <TeamMemberImage src={image} alt={playerName} />

      <TeamMemberInfo>
        <TeamMemberName>{playerName}</TeamMemberName>
        <TeamMemberDescription>{`Joined in ${formatedPlayerJoinedInDate}`}</TeamMemberDescription>
        <TeamMemberDescription>{description2}</TeamMemberDescription>
      </TeamMemberInfo>

      {isCaptain ? (
        <SideOption backgroundColor="#ED5353">
          <RemoveButton>Delete</RemoveButton>
        </SideOption>
      ) : null}
    </TeamMemberCardWrapper>
  );
};

export default TeamMemberCard;
