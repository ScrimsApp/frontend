import styled from 'styled-components';

export const TeamCardWrapper = styled.div`
  width: 260px;
  height: 260px;
  position: relative;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  overflow: hidden;

  @media only screen and (max-width: 1320px) {
    width: 230px;
    height: 230px;
  }

  @media only screen and (max-width: 1180px) {
    width: 180px;
    height: 180px;
  }

  @media only screen and (max-width: 950px) {
    width: 40%;
    height: 200px;
    margin-bottom: 36px;
  }

  @media only screen and (max-width: 600px) {
    width: 45%;
    height: 230px;
  }

  @media only screen and (max-width: 500px) {
    width: 240px;
    height: 180px;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const TeamCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const TeamNameWrapper = styled.div`
  width: 100%;
  height: 30%;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 15px;

  background-color: ${(props) => props.theme.colors.primary};

  overflow: hidden;

  transform: translateX(-92%);
  transition: transform 200ms ease-in-out;
  z-index: 2;
  box-sizing: border-box;

  &&:hover {
    transform: translateX(0);
  }
`;

export const TeamName = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.light};
`;
