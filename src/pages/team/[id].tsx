import { GetServerSideProps } from 'next';
import { FunctionComponent } from 'react';

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

import Loading from '../../components/Loading/Loading.component';

import { BackArrow } from '../../styles/shared/BackArrow/BackArrow.styles';

import { useRouter } from 'next/router';

interface TeamProps {
  teamById: TeamResponse;
}

const Team: FunctionComponent<TeamProps> = ({ teamById }) => {
  const router = useRouter();
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
          <BackArrow onClick={() => router.back()}>&#8592;</BackArrow>
          <TeamByIdInfoWrapper>
            <TeamInfoCard
              teamImage={`https://scrimsapp.tech/storage/${teamById.image}`}
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
                  image={player.image}
                  playerName={player.name}
                  playerId={player.id}
                  description1={player.created_at}
                  description2="5 matches played"
                  userId={player.person_id}
                />
              ))}
            </TeamByIdMembers>
          </TeamByIdMembersWrapper>
        </TeamByIdWrapper>
      ) : (
        <Loading fullPage={true} />
      )}
    </MainWrapper>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
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
