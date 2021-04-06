import { useContext } from 'react';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';
import {
  RecentJoinedTeamsWrapper,
  SectionTitle,
  TeamsWrapper,
} from '../styles/pages/teams/teams.styles';

import TeamsCard from '../components/TeamsCard/TeamsCard.component';
import TeamCard from '../components/TeamCard/TeamCard.component';

import Loading from '../components/Loading/Loading.component';
import { GlobalContext } from '../context/GlobalContext.';
import useTeams from '../hooks/useTeams';

const Teams = () => {
  const { data, error, isLoading } = useTeams();
  const { userContext, notificationContext } = useContext(GlobalContext);
  const { setNotificationStatus, setNewNotification } = notificationContext;
  const { user } = userContext;

  if (error) {
    setNotificationStatus(true);
    setNewNotification({
      type: 'success',
      title: 'Success',
      message: error,
    });
  }

  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Teams playing</SectionTitle>

      {data ? (
        <TeamsWrapper>
          <TeamsCard
            teamImage="https://cdn.ome.lt/9MZ6xKUur-xH3FuVtRP2IE_aViQ=/1200x630/smart/extras/conteudos/team-liquid.jpg"
            teamName={data.name}
            teamMembers={`${data.players?.length || 1} members`}
            teamMatchesPlayed="7 matches played"
            teamFoundedIn="Founded in March 26 2021"
            key={data.name}
            teamId={user.teamId}
          />
        </TeamsWrapper>
      ) : (
        <Loading />
      )}

      <SectionTitle>Recent Joined Teams</SectionTitle>

      {data ? (
        <RecentJoinedTeamsWrapper>
          <TeamCard
            teamName="TEAM Liquid"
            teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
          />

          <TeamCard
            teamName="TEAM Liquid"
            teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
          />

          <TeamCard
            teamName="TEAM Liquid"
            teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
          />

          <TeamCard
            teamName="TEAM Liquid"
            teamImage="https://static-wp-tor15-prd.torcedores.com/wp-content/uploads/2018/04/Team-liquid.jpg"
          />
        </RecentJoinedTeamsWrapper>
      ) : (
        <Loading />
      )}
    </MainWrapper>
  );
};

export default Teams;
