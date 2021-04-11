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
            teamImage="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
            teamName={data.name}
            about="This team is the best team
                                            in the entire universe my
                                            dear friend."
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
            <MatchInvitations visible={isMatchActive} />

            <Schedule visible={isScheduleActive} />
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
            {data.invites.map((invite) => (
              <PlayerRequestCard
                key={invite.id}
                playerImage="https://i1.sndcdn.com/avatars-000646875795-8v89iy-t500x500.jpg"
                playerName={`Invite id ${invite.id}`}
                isCaptain={user.captain}
                teamCaptainId={data.user_id}
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