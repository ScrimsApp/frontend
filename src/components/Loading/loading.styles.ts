import styled, { keyframes } from 'styled-components';

const LoadingAnimation = keyframes`
    from {
        width: 10px;
    }

    to {
        width: 36px;
        border-radius: 12px;
    }
`;

interface LoadingWrapperProps {
  fullPage?: boolean;
}

export const LoadingWrapper = styled.div<LoadingWrapperProps>`
  position: relative;
  width: 100%;
  height: ${(props) => (props.fullPage ? '650px' : 'auto')};
  max-height: 50vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoadingIcon = styled.span`
  display: block;
  width: 36px;
  height: 12px;

  border-radius: ${(props) => props.theme.misc.borderRadius};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.semiDark};
  transition: all 200ms ease-in-out;

  z-index: 10;

  &&:after {
    content: '';
    position: absolute;
    width: 10px;
    height: 12px;
    border-radius: 12px 0px 0px 12px;
    background-color: ${(props) => props.theme.colors.primary};
    animation: ${LoadingAnimation} 500ms ease-in-out infinite;
  }
`;
