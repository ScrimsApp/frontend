import { FunctionComponent } from 'react';

import { MatchTeamProps } from './types';

import {
  MatchTeamWrapper,
  Image,
  TeamName,
  TeamMembersWrapper,
  TeamMembers,
} from './matchTeam.styles';

import TeamMemberCard from '../TeamMemberCard/TeamMemberCard.component';

const MatchTeam: FunctionComponent<MatchTeamProps> = ({
  userId,
  image,
  name,
  players,
}) => {
  return (
    <MatchTeamWrapper>
      <Image src={`http://scrimsapp.tech/storage/public/${image}`} alt={name} />

      <TeamMembersWrapper>
        <TeamName>{name}</TeamName>

        <TeamMembers>
          {players.map((player) => (
            <TeamMemberCard
              key={player.name}
              image={player.image}
              playerName={player.name}
              playerId={player.id}
              description1={player.created_at}
              description2="5 matches played"
              isCaptain={false}
              userId={userId}
            />
          ))}
        </TeamMembers>
      </TeamMembersWrapper>
    </MatchTeamWrapper>
  );
};

export default MatchTeam;
