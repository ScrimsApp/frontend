import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  width: 100%;
  position: relative;

  margin-top: 56px;

  display: flex;
  justify-content: space-between;

  overflow: hidden;

  @media only screen and (max-width: 1000px) {
    flex-flow: column;
  }
`;

export const TeamWrapper = styled.div`
  width: 50%;
`;
