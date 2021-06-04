import styled from 'styled-components';
import {
  PlayerWrapper,
  Image,
  Form,
  IconWrapper,
  FileInput,
} from '../PlayerProfileWrapper/playerProfileWrapper.styles';

export const TeamWrapper = styled(PlayerWrapper)`
  @media only screen and (max-width: 1000px) {
    & {
      margin-top: 36px;
    }
  }
`;
export const TeamImage = styled(Image)``;
export const TeamForm = styled(Form)``;
export const TeamIconWrapper = styled(IconWrapper)``;
export const TeamFileInput = styled(FileInput)``;
