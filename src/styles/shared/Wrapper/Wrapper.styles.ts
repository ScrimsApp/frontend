import styled from 'styled-components';

export const MainWrapper = styled.main`
  max-width: 1600px;
  display: flex;
  flex-flow: column;
  align-items: center;

  margin: 0 auto;
  padding: 56px 90px 56px 90px;

  box-sizing: border-box;

  @media only screen and (max-width: 1200px) {
  }

  @media only screen and (max-width: 750px) {
    padding: 56px 36px 56px 36px;
  }

  @media only screen and (max-width: 520px) {
  }
`;
