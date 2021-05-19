import styled from 'styled-components';

export const ProfileWrapper = styled.section`
  width: 100%;
  position: relative;

  margin-top: 56px;

  display: flex;

  border-radius: 12px;
  overflow: hidden;

  @media only screen and (max-width: 840px) {
    flex-flow: column;
  }
`;

export const TeamWrapper = styled.div`
  width: 50%;
`;
