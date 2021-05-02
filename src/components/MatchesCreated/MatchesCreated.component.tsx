import { FunctionComponent } from 'react';

import { MatchesCreatedProps } from './types';

import {
  MatchesCreatedWrapper,
  MatchesCreatedCardWrapper,
  MatchesCreatedCardImage,
  MatchesCreatedInfo,
  MatchesCreatedName,
  MatchesCreatedDescription,
  MatchesCreatedSideOption,
  MatchesCreatedCancelButton,
} from './matchesCreated.styles';

const MatchesCreated: FunctionComponent<MatchesCreatedProps> = ({
  visible,
  matchesCreated,
}) => {
  return (
    <MatchesCreatedWrapper visible={visible}>
      {matchesCreated?.map((match) => (
        <MatchesCreatedCardWrapper key={match.id}>
          <MatchesCreatedCardImage
            alt={match.team_1.name}
            src={`http://localhost:8000/storage/${match.team_1.image}`}
          />

          <MatchesCreatedInfo>
            <MatchesCreatedName>{match.team_1.name}</MatchesCreatedName>

            <MatchesCreatedDescription>
              {match.format}
            </MatchesCreatedDescription>

            <MatchesCreatedDescription>
              {match.data} {match.time}
            </MatchesCreatedDescription>
          </MatchesCreatedInfo>

          <MatchesCreatedSideOption backgroundColor="#ED5353">
            <MatchesCreatedCancelButton>Cancel</MatchesCreatedCancelButton>
          </MatchesCreatedSideOption>
        </MatchesCreatedCardWrapper>
      ))}
    </MatchesCreatedWrapper>
  );
};

export default MatchesCreated;
