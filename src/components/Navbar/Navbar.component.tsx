import { FunctionComponent, useState } from 'react';
import Link from 'next/link';

import {
  LinkButton,
  ButtonOverlay,
  ButtonWrapper,
} from '../../styles/shared/Button/Button.styles';
import {
  NavbarWrapper,
  Nav,
  NavItem,
  NavUserItem,
  NavIcon,
} from './navbar.styles';

const Navbar: FunctionComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavbarWrapper>
      <span>LOGO</span>

      <Nav className={isNavOpen ? '' : 'hide'}>
        <Link passHref href="/">
          <NavItem className="active">Home</NavItem>
        </Link>

        <Link passHref href="/team">
          <NavItem>Team</NavItem>
        </Link>

        <Link passHref href="/signin">
          <NavItem>Schedule</NavItem>
        </Link>

        {/* If logged in -> MOBILE*/}
        {/* <Link passHref href="/signin">
          <NavUserItem>Username</NavUserItem>
        </Link> */}

        {/* If logged in*/}
        <Link passHref href="/logout">
          <NavItem>Logout</NavItem>
        </Link>
      </Nav>

      <ButtonWrapper className="hide" minWidth="15%">
        <ButtonOverlay className="overlay" type="primary" />
        <Link passHref href="/signin">
          {/* <LinkButton>Sign in</LinkButton> */}

          {/* If logged in -> DESKTOP*/}
          <LinkButton>Username</LinkButton>
        </Link>
      </ButtonWrapper>

      <NavIcon onClick={handleNavOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
