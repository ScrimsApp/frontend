import styled from 'styled-components';

export const TeamWrapper = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-top: 56px;

  box-sizing: border-box;

  @media only screen and (max-width: 1050px) {
    flex-direction: column;
  }
`;

export const TeamInfoWrapper = styled.section`
  display: flex;

  width: 60%;
  height: 500px;

  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const MatchesWrapper = styled.section`
  display: flex;

  width: 35%;
  height: 1000px;

  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const TeamMembersWrapper = styled.section`
  display: flex;

  width: 60%;
  height: 444px;

  margin-top: -500px;
  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const PlayersRequests = styled.section`
  display: flex;

  width: 100%;
  height: 400px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
`;
