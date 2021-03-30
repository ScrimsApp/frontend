import { FunctionComponent } from 'react';

import {
  TeamInfoWrapper,
  TeamImage,
  TeamInfoContent,
  TeamName,
  TeamAbout,
  TeamDescription,
} from './teamInfoCard.styles';

const TeamInfoCard: FunctionComponent = () => {
  return (
    <TeamInfoWrapper>
      <TeamImage
        src="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
        alt="Team"
      />

      <TeamInfoContent>
        <TeamName>TEAM Liquid</TeamName>

        <TeamAbout>
          This team is the best team in the entire universe my dear friend.
        </TeamAbout>

        <TeamDescription>7 matches played</TeamDescription>

        <TeamDescription>7 members</TeamDescription>

        <TeamDescription>Founded in March 26 2021</TeamDescription>
      </TeamInfoContent>
    </TeamInfoWrapper>
  );
};

export default TeamInfoCard;
