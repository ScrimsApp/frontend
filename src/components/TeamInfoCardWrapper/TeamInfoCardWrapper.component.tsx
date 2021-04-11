import { FunctionComponent } from 'react';

import TeamInfoCard from '../TeamInfoCard/TeamInfoCard.component';
import { TeamInfoCardWrapperProps } from './types';

const TeamInfoCardWrapper: FunctionComponent<TeamInfoCardWrapperProps> = ({
  teamImage,
  teamName,
  about,
  description,
  description2,
  description3,
}) => {
  let teamFoundedIndDate = new Date(description3);

  let formatedTeamFoundedIndDate = teamFoundedIndDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <TeamInfoCard
      teamImage="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
      teamName={teamName}
      about="This team is the best team
                    in the entire universe my
                    dear friend."
      description="7 matches played"
      description2={description2}
      description3={`Founded in ${formatedTeamFoundedIndDate}`}
    />
  );
};

export default TeamInfoCardWrapper;