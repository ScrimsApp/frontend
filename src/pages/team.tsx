import { FunctionComponent, useContext, useEffect } from 'react';

import { GlobalContext } from '../context/GlobalContext.';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import TeamCardWrapper from '../components/TeamCardWrapper/TeamCardWrapper.component';
import TeamTip from '../components/TeamTip/TeamTip.component';

import { api } from '../config/api';
import { Player } from '../types/player/Player.type';

const Team: FunctionComponent = () => {
  const { userContext } = useContext(GlobalContext);
  const { user, updateUserInfo } = userContext;

  useEffect(() => {
    if (!user.teamId && user.token) {
      api
        .get<Player>('player', {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        })
        .then((data) => {
          if (data.data.team_id) {
            updateUserInfo({ ...user, teamId: data.data.team_id });
          }
        })
        .catch((error) => console.log(error));
    }
  }, []);

  return (
    <MainWrapper>
      <Navbar />

      {user.teamId ? <TeamCardWrapper /> : <TeamTip />}
    </MainWrapper>
  );
};

export default Team;
