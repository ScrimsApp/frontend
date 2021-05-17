import styled, { keyframes } from 'styled-components';

const initial = keyframes`
  from {
    transform: translateY(10%);
    opacity: 0.3;
  }

  to {
    transform: translateY(0%);
    opacity: 1;
  }
`;

export const CardWrapper = styled.div`
  width: 320px;
  height: auto;

  display: flex;
  flex-flow: column;

  margin: 0px 0 36px 0;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  overflow: hidden;

  transition: all 200ms ease-in-out;
  animation: ${initial} 200ms linear forwards;

  @media only screen and (max-width: 840px) {
    width: 45%;
    height: auto;
  }

  @media only screen and (max-width: 620px) {
    width: 70%;
    margin-left: auto;
    margin-right: auto;
  }

  @media only screen and (max-width: 530px) {
    width: 300px;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 40%;
  max-height: 160px;

  object-fit: cover;
`;

export const CardInfo = styled.div`
  width: 100%;
  height: 60%;
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column;

  box-sizing: border-box;

  background-color: ${(props) => props.theme.colors.semiDark};

  padding: 30px;

  .textStyles {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;

export const CardTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.light};

  padding-bottom: 10px;
`;

export const CardDescription = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.light};

  min-height: 40px;
  max-height: 40px;

  max-width: 90%;

  padding-bottom: 10px;
`;

export const CardHashtagWrapper = styled.div`
  display: flex;

  margin-bottom: 5px;
`;

export const CardHashtag = styled.span`
  font-size: 10px;
  color: #b7b7b7;

  text-transform: uppercase;

  margin-right: 5px;
`;

export const CardAssignWrapper = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;

  padding: 15px;

  background-color: ${(props) => props.theme.colors.secondary};

  overflow: hidden;

  transform: translateX(-90%);
  transition: transform 200ms ease-in-out;
  z-index: 2;
  box-sizing: border-box;

  &&:hover {
    transform: translateX(0);
  }
`;

export const CardAssignDetailsWrapper = styled.div`
  display: flex;

  margin-bottom: 15px;
`;

export const CardAssignDetail = styled.span`
  display: block;
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.light};

  padding-bottom: 15px;

  &&:first-child {
    margin-right: 10px;
  }
`;

export const AssignButtonWrapper = styled.div`
  width: 98%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
