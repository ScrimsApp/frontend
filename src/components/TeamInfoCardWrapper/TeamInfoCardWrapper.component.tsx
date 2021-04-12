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
      teamImage={teamImage}
      teamName={teamName}
      about={about}
      description={description}
      description2={description2}
      description3={`Founded in ${formatedTeamFoundedIndDate}`}
    />
  );
};

export default TeamInfoCardWrapper;
