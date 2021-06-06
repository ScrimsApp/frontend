import { FunctionComponent } from 'react';

import { MatchWrapperProps } from './types';

import { MatchMainWrapper } from './matchWrapper.styles';
import MatchTeam from '../MatchTeam/MatchTeam.component';

const MatchWrapper: FunctionComponent<MatchWrapperProps> = ({ match }) => {
  return (
    <MatchMainWrapper>
      <MatchTeam
        id={match.team_1.id}
        userId={match.team_1.user_id}
        image={match.team_1.image}
        name={match.team_1.name}
        players={match.team_1.players}
      />
      <MatchTeam
        id={match.team_2.id}
        userId={match.team_2.user_id}
        image={match.team_2.image}
        name={match.team_2.name}
        players={match.team_2.players}
      />
    </MatchMainWrapper>
  );
};

export default MatchWrapper;
