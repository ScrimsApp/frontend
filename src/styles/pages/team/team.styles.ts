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
  height: 400px;

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
  flex-direction: column;

  width: 60%;
  height: 544px;

  padding-top: 36px;
  margin-top: -600px;
  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const TeamMembersTitle = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0px 0px 36px 15px;
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  overflow-y: scroll;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #2a2d3a;
    border-radius: 12px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #3a3f56;
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
