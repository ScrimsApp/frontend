import styled, { keyframes } from 'styled-components';

export const NavbarWrapper = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    font-size: 28px;
    font-weight: bold;
  }

  @media only screen and (max-width: 1050px) {
    .hide {
      display: none;
    }
  }
`;

const navItemAnimation = keyframes`
  0%{
    transform: scale(1);
  }

  25% {
    transform: scale(0.9);
  }

  50% {
    transform: scale(1);
  }

  75% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1.2);
  }
`;

export const Nav = styled.nav`
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;

  .active {
    animation: ${navItemAnimation} 200ms linear forwards;
    color: ${(props) => props.theme.colors.text.light};
    transform: scale(1.2);
  }

  .show-on-mobile {
    display: none;
  }

  @media only screen and (max-width: 1050px) {
    .active {
      color: ${(props) => props.theme.colors.text.dark};
      transform: scale(1.2);
    }

    .show-on-mobile {
      display: block;
    }

    position: absolute;
    left: 10%;
    top: 56px;
    width: 80%;
    height: 420px;

    flex-flow: column;
    align-items: flex-start;
    justify-content: space-evenly;

    background-color: ${(props) => props.theme.colors.light};
    border-radius: 12px;
    z-index: 10;
  }

  @media only screen and (max-width: 750px) {
    width: 90%;
    left: 5%;
  }
`;

export const NavItem = styled.a`
  margin: 0px 30px;

  color: ${(props) => props.theme.colors.text.backup};
  font-weight: 600;

  transition: all 200ms ease-in-out;
  cursor: pointer;

  &&:hover {
    color: ${(props) => props.theme.colors.text.light};
  }

  @media only screen and (max-width: 1050px) {
    margin: 0px 30px;

    color: ${(props) => props.theme.colors.text.backup};

    &&:hover {
      color: ${(props) => props.theme.colors.text.dark};
    }
  }
`;

export const NavUserItem = styled(NavItem)`
  color: ${(props) => props.theme.colors.primary}!important;
`;

export const NavIcon = styled.div`
  position: absolute;
  right: 90px;
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
    transition: all 200ms ease-in-out;
  }

  &&:hover {
    &&:after {
      content: '';
      width: 36px;
      border-radius: 12px;
    }
  }

  @media only screen and (min-width: 1050px) {
    display: none;
  }

  @media only screen and (max-width: 750px) {
    right: 36px;
  }
`;
