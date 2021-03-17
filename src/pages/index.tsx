import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';
import {
  Input,
  InputLabel,
  InputWrapper,
} from '../styles/shared/Input/Input.styles';

const Home = () => {
  return (
    <div className="home">
      <div
        style={{
          maxWidth: '740px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <ButtonWrapper minWidth="30%" margin={['10px', '10px']}>
          <ButtonOverlay className="overlay" type="primary" />
          <Button href="">Sign in</Button>
        </ButtonWrapper>

        <ButtonWrapper minWidth="30%" margin={['10px', '10px']}>
          <ButtonOverlay className="overlay" type="secondary" />
          <Button href="">Register</Button>
        </ButtonWrapper>

        <ButtonWrapper minWidth="30%" margin={['10px', '10px']}>
          <ButtonOverlay className="overlay" type="tertiary" />
          <Button href="">Schedule</Button>
        </ButtonWrapper>
      </div>

      <div
        style={{
          maxWidth: '740px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        <InputWrapper margin={['10px', '10px']} minWidth="30%">
          <Input type="text" colorType="primary" />
          <InputLabel>Name</InputLabel>
        </InputWrapper>

        <InputWrapper margin={['10px', '10px']} minWidth="30%">
          <Input type="email" colorType="secondary" />
          <InputLabel>E-mail</InputLabel>
        </InputWrapper>

        <InputWrapper margin={['10px', '10px']} minWidth="30%">
          <Input type="password" colorType="tertiary" />
          <InputLabel className="input-filled">Password</InputLabel>
        </InputWrapper>
      </div>
    </div>
  );
};

export default Home;
