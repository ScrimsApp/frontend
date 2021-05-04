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

interface NotificationWrapperProps {
  backgroundColor: 'success' | 'error' | 'info';
  show: boolean;
}

export const NotificationWrapper = styled.div<NotificationWrapperProps>`
  width: 250px;
  height: 100px;

  position: fixed;
  right: 36px;
  bottom: 36px;

  display: ${(props) => (props.show ? 'flex' : 'none')};
  flex-flow: column;
  justify-content: center;
  align-items: flex-start;

  padding: 15px;

  background-color: ${(props) =>
    props.theme.colors.notification[props.backgroundColor]};
  border-radius: ${(props) => props.theme.misc.borderRadius};
  animation: ${initial} 400ms ease-in-out forwards;
`;

export const NotificationTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.text.light};

  margin-bottom: 20px;
`;
export const NotificationMessage = styled.p`
  font-size: 16px;
  color: ${(props) => props.theme.colors.text.light};
`;

export const CloseIcon = styled.span`
  position: absolute;
  top: 15px;
  right: 15px;

  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &&:hover {
    transform: scale(1.1);
  }
`;
