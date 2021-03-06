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

  .hide {
    display: none !important;
  }
`;

export const TeamInfoWrapper = styled.section`
  display: flex;

  width: 60%;
  height: 350px;

  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: auto;
  }
`;

export const scrollStyles = `
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

export const MatchesScheduleWrapper = styled.section`
  display: flex;
  align-items: flex-start;
  flex-direction: column;

  width: 35%;
  height: 1000px;

  padding-top: 36px;
  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;
  overflow: hidden;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }

  .active {
    font-size: 28px;
    font-weight: bold;
    color: ${(props) => props.theme.colors.text.light};
  }
`;

export const MatchesSchedule = styled.div`
  width: 100%;
  height: 50%;
  display: flex;

  overflow-y: auto;
  overflow-x: hidden;

  margin-bottom: 20px;
`;

export const Options = styled.div`
  display: flex;
  width: 90%;

  justify-content: space-around;
  align-items: center;

  margin: 0px 15px 36px 15px;
`;

export const MatchesScheduleTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.backup};

  transition: all 200ms ease-in-out;
  cursor: pointer;
`;

export const TeamMembersWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 60%;
  height: 595px;

  padding-top: 36px;
  margin-top: -650px;
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

  ${scrollStyles}
`;

export const PlayersRequestsWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: auto;

  padding-top: 36px;
  padding-bottom: 36px;
  margin-bottom: 36px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 12px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
  }
`;

export const PlayersRequestsTitle = styled(TeamMembersTitle)``;

export const PlayersRequests = styled.div`
  width: 100%;
  /* height: 100%; */

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 0px 15px;

  box-sizing: border-box;

  @media only screen and (max-width: 1050px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;
