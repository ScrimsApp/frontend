import styled from 'styled-components';

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

export const MatchTeamWrapper = styled.div`
  width: 45%;
  position: relative;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  overflow: hidden;
  border-radius: 12px;

  @media only screen and (max-width: 1000px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-height: 250px;
  min-height: 250px;

  object-fit: cover;
`;

export const TeamName = styled.h2`
  font-size: 28px;
  font-weight: bold;
  margin: 0px 0px 36px 15px;
`;

export const TeamMembersWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 500px;

  padding-top: 36px;
  margin-bottom: 56px;

  background-color: #1f2333;
  box-sizing: border-box;
  border-radius: 0px 0px 12px 12px;

  @media only screen and (max-width: 1050px) {
    width: 100%;
    margin-top: 0;
  }
`;

export const TeamMembers = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  ${scrollStyles}
`;
