import {
  Button,
  ButtonOverlay,
  ButtonWrapper,
} from '../styles/shared/Button/Button.styles';

const Home = () => {
  return (
    <div className="home">
      <h1>Project initial config</h1>

      <ButtonWrapper>
        <ButtonOverlay />
        <Button href="">Click me!</Button>
      </ButtonWrapper>
    </div>
  );
};

export default Home;
