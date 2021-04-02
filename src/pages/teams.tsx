import Navbar from '../components/Navbar/Navbar.component';
import { TeamsWrapper, SectionTitle } from '../styles/pages/index/index.styles';
import { MainWrapper } from '../styles/shared/Wrapper/Wrapper.styles';

const Teams = () => {
  return (
    <MainWrapper>
      <Navbar />

      <SectionTitle>Teams playing</SectionTitle>
      <TeamsWrapper></TeamsWrapper>
    </MainWrapper>
  );
};

export default Teams;
