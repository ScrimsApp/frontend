import { FunctionComponent } from 'react';
import Link from 'next/link';

import {
  LinkButton,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';
import { NavbarWrapper, Nav, NavItem } from './navbar.styles';

const Navbar: FunctionComponent = () => {
  return (
    <NavbarWrapper>
      <span>LOGO</span>

      <Nav>
        <Link passHref href="/">
          <NavItem className="active">Home</NavItem>
        </Link>

        <Link passHref href="/team">
          <NavItem>Team</NavItem>
        </Link>

        <Link passHref href="/signin">
          <NavItem>Schedule</NavItem>
        </Link>

        <Link passHref href="/signin">
          <NavItem>Logout</NavItem>
        </Link>
      </Nav>

      <ButtonWrapper minWidth="15%">
        <ButtonOverlay className="overlay" type="primary" />
        <Link passHref href="/signin">
          <LinkButton>Sign in</LinkButton>
        </Link>
      </ButtonWrapper>
    </NavbarWrapper>
  );
};

export default Navbar;
