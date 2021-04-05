import { useRouter } from 'next/router';
import Navbar from '../../components/Navbar/Navbar.component';

import { MainWrapper } from '../../styles/shared/Wrapper/Wrapper.styles';

const Team = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <MainWrapper>
      <Navbar />

      <p style={{ marginTop: '56px' }}>Team : {id}</p>
    </MainWrapper>
  );
};

export default Team;
