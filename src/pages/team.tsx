import { FunctionComponent, useContext, useState } from 'react';

import { GlobalContext } from '../context/GlobalContext.';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

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
} from '../styles/pages/team/team.styles';

import TeamInfoCard from '../components/TeamInfoCard/TeamInfoCard.component';
import TeamMemberCard from '../components/TeamMemberCard/TeamMemberCard.component';
import PlayerRequestCard from '../components/PlayerRequestCard/PlayerRequestCard.component';
import Schedule from '../components/Schedule/Schedule.component';
import MatchInvitations from '../components/MatchInvitations/MatchInvitations.component';
import TeamTip from '../components/TeamTip/TeamTip.component';

import { myTeamContent } from '../content/myTeam/myTeam.content';

const Team: FunctionComponent = () => {
  const [isMatchActive, setIsMatchActive] = useState(true);
  const [isScheduleActive, setIsScheduleActive] = useState(false);
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  const handleMatchScheduleActive = () => {
    setIsMatchActive(!isMatchActive);
    setIsScheduleActive(!isScheduleActive);
  };

  return (
    <MainWrapper>
      <Navbar />

      {user.teamId ? (
        <TeamWrapper>
          <TeamInfoWrapper>
            <TeamInfoCard
              teamImage="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
              teamName="TEAM Liquid"
              about="This team is the best team
                  in the entire universe my
                  dear friend."
              description="7 matches played"
              description2="7 members"
              description3="Founded in March 26 2021"
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
            <TeamMembersTitle>
              {myTeamContent.teamMembersTitle}
            </TeamMembersTitle>

            <TeamMembers>
              <TeamMemberCard
                image="https://sm.ign.com/ign_br/screenshot/default/morty_ep2e.jpg"
                playerName="Morty"
                description1="Joined in 03.26.2021"
                description2="5 matches played"
              />

              <TeamMemberCard
                image="https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg"
                playerName="Rick"
                description1="Joined in 03.29.2021"
                description2="2 matches played"
              />

              <TeamMemberCard
                image="https://sm.ign.com/ign_br/screenshot/default/morty_ep2e.jpg"
                playerName="Morty"
                description1="Joined in 03.26.2021"
                description2="5 matches played"
              />

              <TeamMemberCard
                image="https://i.pinimg.com/originals/ac/51/52/ac5152b9f7f50781b2b01e35463fc4e6.jpg"
                playerName="Rick"
                description1="Joined in 03.29.2021"
                description2="2 matches played"
              />
            </TeamMembers>
          </TeamMembersWrapper>

          <PlayersRequestsWrapper>
            <PlayersRequestsTitle>
              {myTeamContent.playersRequestsTitle}
            </PlayersRequestsTitle>

            <PlayersRequests>
              <PlayerRequestCard
                playerImage="https://i1.sndcdn.com/avatars-000646875795-8v89iy-t500x500.jpg"
                playerName="Poppybutthole"
              />

              <PlayerRequestCard
                playerImage="https://i1.sndcdn.com/avatars-000646875795-8v89iy-t500x500.jpg"
                playerName="Poppybutthole"
              />

              <PlayerRequestCard
                playerImage="https://i1.sndcdn.com/avatars-000646875795-8v89iy-t500x500.jpg"
                playerName="Poppybutthole"
              />

              <PlayerRequestCard
                playerImage="https://i1.sndcdn.com/avatars-000646875795-8v89iy-t500x500.jpg"
                playerName="Poppybutthole"
              />
            </PlayersRequests>
          </PlayersRequestsWrapper>
        </TeamWrapper>
      ) : (
        <TeamTip />
      )}
    </MainWrapper>
  );
};

export default Team;
