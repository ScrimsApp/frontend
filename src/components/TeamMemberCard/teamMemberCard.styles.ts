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

export const TeamMemberCardWrapper = styled.div`
  width: 100%;
  height: 180px;

  position: relative;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  padding: 15px;
  margin: 15px 0px;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  background-color: #2b3044;
  box-sizing: border-box;
  overflow: hidden;
  transition: all 200ms ease-in-out;
  animation: ${initial} 200ms linear forwards;
`;

export const TeamMemberImage = styled.img`
  width: 20%;
  height: 100%;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  object-fit: cover;
`;

export const TeamMemberInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: column wrap;

  margin-left: 15px;
`;

export const TeamMemberName = styled.h4`
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.text.light};

  margin-bottom: 15px;
`;

export const TeamMemberDescription = styled.span`
  font-size: 16px;
  color: #c4c4c4;

  margin-bottom: 15px;

  &&:last-child {
    margin-bottom: 0px;
  }
`;

interface SideOptionProps {
  backgroundColor: string;
}

export const SideOption = styled.div<SideOptionProps>`
  position: absolute;
  top: 0;
  right: 0;

  width: 25%;
  height: 100%;

  background-color: ${(props) => props.backgroundColor};

  transition: all 200ms ease-in-out;
  transform: translateX(90%);
  cursor: pointer;
  overflow: hidden;

  &&:hover {
    transform: translateX(0%);
  }

  &:active {
    filter: brightness(80%);
  }
`;

export const RemoveButton = styled.a`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  font-weight: bold;
  color: ${(props) => props.theme.colors.text.light};
  text-transform: uppercase;
`;
