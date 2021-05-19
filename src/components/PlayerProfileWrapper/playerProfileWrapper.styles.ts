import styled from 'styled-components';

export const PlayerWrapper = styled.div`
  width: 50%;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  background-color: #262a3b;

  @media only screen and (max-width: 840px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 350px;

  object-fit: cover;
`;

export const Form = styled.form`
  width: 100%;

  box-sizing: border-box;
  padding: 36px 36px 0px 36px;
`;
