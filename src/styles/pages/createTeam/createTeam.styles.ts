import styled from 'styled-components';

import {
  SignWrapper,
  GradientLayer,
  SignForm,
  SignTitle,
  SignDescription,
  ErrorLabel,
} from '../sign/Sign.styles';

export const CreateTeamWrapper = styled(SignWrapper)``;
export const CreateTeamGradientLayer = styled(GradientLayer)`
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.21),
      rgba(255, 255, 255, 0.21)
    ),
    linear-gradient(142.17deg, #7d52e0 41.67%, #4767f9 80.11%), #192039;
`;
export const CreateTeamForm = styled(SignForm)``;
export const CreateTeamTitle = styled(SignTitle)``;
export const CreateTeamDescription = styled(SignDescription)``;

export const BackArrow = styled.span`
  color: ${(props) => props.theme.colors.text.backup};
  font-size: 40px;
  margin-bottom: 20px;

  cursor: pointer;
  transition: transform 200ms ease-in-out;

  &&:hover {
    transform: translateX(-10px);
  }
`;

export const FileInput = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: hidden;
  outline: none;

  z-index: 50;
  cursor: pointer;
  color: transparent;

  &&::-webkit-file-upload-button {
    visibility: hidden;
  }
`;
