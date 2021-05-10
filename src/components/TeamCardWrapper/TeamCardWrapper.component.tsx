import { FunctionComponent, useContext } from 'react';
import useSWR from 'swr';

import {
  TeamWrapper,
  TeamInfoWrapper,
  TeamMembersWrapper,
  PlayersRequestsWrapper,
  TeamMembersTitle,
  TeamMembers,
  PlayersRequestsTitle,
  PlayersRequests,
} from '../../styles/pages/team/team.styles';

import TeamMemberCard from '../TeamMemberCard/TeamMemberCard.component';
import PlayerRequestCard from '../PlayerRequestCard/PlayerRequestCard.component';

import TeamInfoCardWrapper from '../TeamInfoCardWrapper/TeamInfoCardWrapper.component';

import { myTeamContent } from '../../content/myTeam/myTeam.content';

import { GlobalContext } from '../../context/GlobalContext.';
import { TeamResponse } from '../../types/responses/team/TeamResponse.type';
import { api } from '../../config/api';
import Loading from '../Loading/Loading.component';
import SideMatchesSchedule from '../SideMatchesSchedule/SideMatchesSchedule.component';

const TeamCardWrapper: FunctionComponent = () => {
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

        <SideMatchesSchedule
          invites_matches_receives={data.invites_matches_receives}
          invites_matches_sends={data.invites_matches_sends}
          matches_accepted={data.matches_accepted}
          matches_created={data.matches_created}
        />

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

  return <Loading fullPage={true} />;
};

export default TeamCardWrapper;
