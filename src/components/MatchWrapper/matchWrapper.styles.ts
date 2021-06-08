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

export const RoomInfo = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  padding: 36px;
  box-sizing: border-box;

  border-radius: 12px;
  background-color: #1f2333;
`;

export const RoomInfoTitle = styled.h2`
  width: 80%;
  text-align: left;
  font-size: 24px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.light};

  margin-bottom: 20px;
`;

export const RoomInfoText = styled.p`
  width: 100%;
  text-align: left;
  font-size: 16px;
  font-weight: 300;
  color: ${(props) => props.theme.colors.text.light};

  &&:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const HightlightSpan = styled.span`
  color: ${(props) => props.theme.colors.secondary};
`;
