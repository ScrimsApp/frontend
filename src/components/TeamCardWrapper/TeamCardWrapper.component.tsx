import { FunctionComponent, useContext, useState } from 'react';
import useSWR from 'swr';

import {
  TeamWrapper,
  TeamInfoWrapper,
  MatchesScheduleWrapper,
  MatchesSchedule,
  Options,
  MatchesScheduleTitle,
  TeamMembersWrapper,
  PlayersRequestsWrapper,
  TeamMembersTitle,
  TeamMembers,
  PlayersRequestsTitle,
  PlayersRequests,
} from '../../styles/pages/team/team.styles';

import TeamMemberCard from '../TeamMemberCard/TeamMemberCard.component';
import PlayerRequestCard from '../PlayerRequestCard/PlayerRequestCard.component';
import Schedule from '../Schedule/Schedule.component';
import MatchInvitations from '../MatchInvitations/MatchInvitations.component';
import TeamInfoCardWrapper from '../TeamInfoCardWrapper/TeamInfoCardWrapper.component';

import { myTeamContent } from '../../content/myTeam/myTeam.content';

import { GlobalContext } from '../../context/GlobalContext.';
import { TeamResponse } from '../../types/responses/team/TeamResponse.type';
import { api } from '../../config/api';
import Loading from '../Loading/Loading.component';

const TeamCardWrapper: FunctionComponent = () => {
  const [isMatchActive, setIsMatchActive] = useState(true);
  const [isScheduleActive, setIsScheduleActive] = useState(false);
  const [isMatchSentActive, setIsMatchSentActive] = useState(true);
  const [isMatchesCreatedActive, setIsMatchesCreatedActive] = useState(false);
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  let headerOptions = {
    headers: {
      Authorization: 'Bearer ' + user.token,
    },
  };

  const fetcher = (url: string) =>
    api.get(url, headerOptions).then((res) => res.data);

  const { data, error } = useSWR<TeamResponse>('team', fetcher);

  const handleMatchScheduleActive = () => {
    setIsMatchActive(!isMatchActive);
    setIsScheduleActive(!isScheduleActive);
  };

  const handleMatchesActive = () => {
    setIsMatchSentActive(!isMatchSentActive);
    setIsMatchesCreatedActive(!isMatchesCreatedActive);
  };

  if (error) {
    setNotificationStatus(true);
    setNewNotification({
      type: 'error',
      title: 'Error',
      message: error,
    });
  }

  if (data) {
    return (
      <TeamWrapper>
        <TeamInfoWrapper>
          <TeamInfoCardWrapper
            key={data.name}
            teamImage={`http://localhost:8000/storage/${data.image}`}
            teamName={data.name}
            about={data.description}
            description="7 matches played"
            description2={`${data.players?.length || 1} members`}
            description3={data.created_at}
          />
        </TeamInfoWrapper>

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
              matchInvites={data.invites_matches_receives}
            />

            <Schedule
              visible={isScheduleActive}
              matchesSchedule={data.matches_accepted}
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
            <MatchInvitations
              visible={isMatchSentActive}
              matchInvites={data.invites_matches_receives}
            />

            <Schedule
              visible={isMatchesCreatedActive}
              matchesSchedule={data.matches_accepted}
            />
          </MatchesSchedule>
        </MatchesScheduleWrapper>

        <TeamMembersWrapper>
          <TeamMembersTitle>{myTeamContent.teamMembersTitle}</TeamMembersTitle>

          <TeamMembers>
            {data.players.map((player) => (
              <TeamMemberCard
                key={player.name}
                image="https://sm.ign.com/ign_br/screenshot/default/morty_ep2e.jpg"
                playerName={player.name}
                playerId={player.id}
                description1={player.created_at}
                description2="5 matches played"
                isCaptain={user.captain}
              />
            ))}
          </TeamMembers>
        </TeamMembersWrapper>

        <PlayersRequestsWrapper>
          <PlayersRequestsTitle>
            {myTeamContent.playersRequestsTitle}
          </PlayersRequestsTitle>

          <PlayersRequests>
            {data.invites_players?.map((invite) => (
              <PlayerRequestCard
                key={invite.id}
                playerImage="https://i1.sndcdn.com/avatars-000646875795-8v89iy-t500x500.jpg"
                playerName={invite.player.name}
                isCaptain={user.captain}
                playerId={invite.player.id}
                inviteId={invite.id}
              />
            ))}
          </PlayersRequests>
        </PlayersRequestsWrapper>
      </TeamWrapper>
    );
  }

  return <Loading />;
};

export default TeamCardWrapper;
