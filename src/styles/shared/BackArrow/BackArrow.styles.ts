import styled from 'styled-components';

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
