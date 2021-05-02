import { FunctionComponent, useState } from 'react';

import {
  MatchesScheduleWrapper,
  MatchesSchedule,
  Options,
  MatchesScheduleTitle,
} from '../../styles/pages/team/team.styles';

import Schedule from '../Schedule/Schedule.component';
import MatchInvitations from '../MatchInvitations/MatchInvitations.component';

import MatchInvitesSent from '../MatchInvitesSent/MatchInvitesSent.component';
import MatchesCreated from '../MatchesCreated/MatchesCreated.component';

import { SideMatchesScheduleProps } from './types';

import { myTeamContent } from '../../content/myTeam/myTeam.content';

const SideMatchesSchedule: FunctionComponent<SideMatchesScheduleProps> = ({
  invites_matches_receives,
  invites_matches_sends,
  matches_accepted,
  matches_created,
}) => {
  const [isMatchActive, setIsMatchActive] = useState(true);
  const [isScheduleActive, setIsScheduleActive] = useState(false);
  const [isMatchSentActive, setIsMatchSentActive] = useState(true);
  const [isMatchesCreatedActive, setIsMatchesCreatedActive] = useState(false);

  const handleMatchScheduleActive = () => {
    setIsMatchActive(!isMatchActive);
    setIsScheduleActive(!isScheduleActive);
  };

  const handleMatchesActive = () => {
    setIsMatchSentActive(!isMatchSentActive);
    setIsMatchesCreatedActive(!isMatchesCreatedActive);
  };

  return (
    <MatchesScheduleWrapper>
      <Options>
        <MatchesScheduleTitle
          className={isMatchActive ? 'active' : ''}
          onClick={handleMatchScheduleActive}
        >
          {myTeamContent.matchesTitle}
        </MatchesScheduleTitle>
        <MatchesScheduleTitle
          className={isScheduleActive ? 'active' : ''}
          onClick={handleMatchScheduleActive}
        >
          {myTeamContent.scheduleTitle}
        </MatchesScheduleTitle>
      </Options>

      <MatchesSchedule>
        <MatchInvitations
          visible={isMatchActive}
          matchInvites={invites_matches_receives}
        />

        <Schedule
          visible={isScheduleActive}
          matchesSchedule={matches_accepted}
        />
      </MatchesSchedule>

      <Options>
        <MatchesScheduleTitle
          className={isMatchSentActive ? 'active' : ''}
          onClick={handleMatchesActive}
        >
          {myTeamContent.matchesSent}
        </MatchesScheduleTitle>
        <MatchesScheduleTitle
          className={isMatchesCreatedActive ? 'active' : ''}
          onClick={handleMatchesActive}
        >
          {myTeamContent.matchesCreated}
        </MatchesScheduleTitle>
      </Options>

      <MatchesSchedule>
        <MatchInvitesSent
          visible={isMatchSentActive}
          matchInvitesSent={invites_matches_sends}
        />

        <MatchesCreated
          visible={isMatchesCreatedActive}
          matchesCreated={matches_created}
        />
      </MatchesSchedule>
    </MatchesScheduleWrapper>
  );
};

export default SideMatchesSchedule;
