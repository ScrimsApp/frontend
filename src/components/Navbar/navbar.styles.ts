import styled from 'styled-components';

export const NavbarWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: bold;
  }

  @media only screen and (max-width: 920px) {
  }
`;

export const Nav = styled.nav`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  .active {
    color: ${(props) => props.theme.colors.text.light};
    transform: scale(1.2);
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export const NavItem = styled.a`
  margin: 0px 30px;

  color: ${(props) => props.theme.colors.text.backup};
  font-weight: 600;

  transition: all 200ms ease-in-out;

  &&:hover {
    color: ${(props) => props.theme.colors.text.light};
  }
`;
