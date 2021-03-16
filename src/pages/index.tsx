import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';

const Home = () => {
  return (
    <div className="home">
      <div
        style={{
          maxWidth: '640px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ButtonWrapper minWidth="25%" margin={['10px', '10px']}>
          <ButtonOverlay type="primary" />
          <Button href="">Sign in</Button>
        </ButtonWrapper>

        <ButtonWrapper minWidth="25%" margin={['10px', '10px']}>
          <ButtonOverlay type="secondary" />
          <Button href="">Register</Button>
        </ButtonWrapper>

        <ButtonWrapper minWidth="25%" margin={['10px', '10px']}>
          <ButtonOverlay type="tertiary" />
          <Button href="">Register</Button>
        </ButtonWrapper>
      </div>
    </div>
  );
};

export default Home;
