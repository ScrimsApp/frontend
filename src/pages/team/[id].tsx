import { GetStaticProps } from 'next';

import Navbar from '../../components/Navbar/Navbar.component';

import { MainWrapper } from '../../styles/shared/Wrapper/Wrapper.styles';
import {
  TeamByIdWrapper,
  TeamByIdInfoWrapper,
  TeamByIdMembersWrapper,
  TeamByIdMembersTitle,
  TeamByIdMembers,
} from '../../styles/pages/team/teamById.styles';

import TeamInfoCard from '../../components/TeamInfoCard/TeamInfoCard.component';
import TeamMemberCard from '../../components/TeamMemberCard/TeamMemberCard.component';

import { TeamResponse } from '../../types/responses/team/TeamResponse.type';
import { api } from '../../config/api';
import { FunctionComponent } from 'react';
import Loading from '../../components/Loading/Loading.component';

interface TeamProps {
  teamById: TeamResponse;
}

const Team: FunctionComponent<TeamProps> = ({ teamById }) => {
  let teamFoundedIndDate = new Date(teamById.created_at);

  let formatedTeamFoundedIndDate = teamFoundedIndDate.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <MainWrapper>
      <Navbar />

      {teamById ? (
        <TeamByIdWrapper>
          <TeamByIdInfoWrapper>
            <TeamInfoCard
              teamImage={`http://localhost:8000/storage/${teamById.image}`}
              teamName={teamById.name}
              about={teamById.description}
              description="7 matches played"
              description2={`${teamById.players.length || 1} members`}
              description3={`Founded in ${formatedTeamFoundedIndDate}`}
            />
          </TeamByIdInfoWrapper>

          <TeamByIdMembersWrapper>
            <TeamByIdMembersTitle>Team Members</TeamByIdMembersTitle>

            <TeamByIdMembers>
              {teamById.players.map((player) => (
                <TeamMemberCard
                  isCaptain={false}
                  key={player.name}
                  image="https://sm.ign.com/ign_br/screenshot/default/morty_ep2e.jpg"
                  playerName={player.name}
                  playerId={player.id}
                  description1={player.created_at}
                  description2="5 matches played"
                />
              ))}
            </TeamByIdMembers>
          </TeamByIdMembersWrapper>
        </TeamByIdWrapper>
      ) : (
        <Loading />
      )}
    </MainWrapper>
  );
};

export const getServerSideProps: GetStaticProps = async ({ params }) => {
  let id = params.id;

  const teamById = await api
    .get<TeamResponse>(`team/${id}`)
    .then((res) => res.data);

  return {
    props: {
      teamById,
    },
  };
};

export default Team;
