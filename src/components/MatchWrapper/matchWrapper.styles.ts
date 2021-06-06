import styled from 'styled-components';

export const MatchMainWrapper = styled.section`
  width: 100%;
  position: relative;

  display: flex;
  justify-content: space-between;

  box-sizing: border-box;
  overflow: hidden;
  margin-top: 56px;

  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;
