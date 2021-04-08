import { FunctionComponent, useContext } from 'react';

import { GlobalContext } from '../context/GlobalContext.';

import Navbar from '../components/Navbar/Navbar.component';

import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

import TeamCardWrapper from '../components/TeamCardWrapper/TeamCardWrapper.component';
import TeamTip from '../components/TeamTip/TeamTip.component';

const Team: FunctionComponent = () => {
  const { userContext } = useContext(GlobalContext);
  const { user } = userContext;

  return (
    <MainWrapper>
      <Navbar />

      {user.teamId ? <TeamCardWrapper /> : <TeamTip />}
    </MainWrapper>
  );
};

export default Team;
