import { FunctionComponent, useState } from 'react';

import { MatchWrapperProps } from './types';

import {
  MatchMainWrapper,
  RoomInfo,
  RoomInfoTitle,
  RoomInfoText,
  HightlightSpan,
} from './matchWrapper.styles';
import MatchTeam from '../MatchTeam/MatchTeam.component';

const MatchWrapper: FunctionComponent<MatchWrapperProps> = ({ match }) => {
  const [showInfo, setShowInfo] = useState(true);
  return (
    <>
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

      {showInfo ? (
        <RoomInfo>
          <svg
            style={{
              position: 'absolute',
              right: '36px',
              cursor: 'pointer',
            }}
            onClick={() => setShowInfo(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
          >
            <line
              x1="1.76777"
              y1="2.22736"
              x2="22.2726"
              y2="22.7322"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="22.2734"
              y1="1.76777"
              x2="1.7686"
              y2="22.2726"
              stroke="white"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <RoomInfoTitle>
            <HightlightSpan> {match.team_1.name}</HightlightSpan> Captain is the
            room owner!
          </RoomInfoTitle>

          <RoomInfoText>
            Room name: <HightlightSpan>match-{match.id}</HightlightSpan>
          </RoomInfoText>
          <RoomInfoText>
            Room password: <HightlightSpan>00{match.id}</HightlightSpan>
          </RoomInfoText>
        </RoomInfo>
      ) : null}
    </>
  );
};

export default MatchWrapper;
