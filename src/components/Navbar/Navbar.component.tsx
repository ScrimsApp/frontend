import { FunctionComponent, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const { pathname } = useRouter();

  const handleNavOpen = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <NavbarWrapper>
      <span>LOGO</span>

      <Nav className={isNavOpen ? '' : 'hide'}>
        <Link passHref href="/">
          <NavItem className={pathname === '/' ? 'active' : ''}>Home</NavItem>
        </Link>

        <Link passHref href="/team">
          <NavItem className={pathname === '/team' ? 'active' : ''}>
            My team
          </NavItem>
        </Link>

        <Link passHref href="/teams">
          <NavItem className={pathname === '/teams' ? 'active' : ''}>
            Teams
          </NavItem>
        </Link>

        <Link passHref href="/match">
          <NavItem className={pathname === '/match' ? 'active' : ''}>
            Match
          </NavItem>
        </Link>

        {/* If logged in -> MOBILE*/}
        {/* <Link passHref href="/profile">
          <NavUserItem className="show-on-mobile">Username</NavUserItem>
        </Link> */}

        {/* If NOT logged in -> MOBILE*/}
        {/* <Link passHref href="/signin">
          <NavUserItem className="show-on-mobile">Sign in</NavUserItem>
        </Link> */}
      </Nav>

      <ButtonWrapper className="hide" minWidth="15%">
        <ButtonOverlay className="overlay" type="primary" />

        {/* If NOT logged in -> DESKTOP*/}
        {/* <Link passHref href="/signin">
          <LinkButton>Sign in</LinkButton>
        </Link> */}

        {/* If logged in -> DESKTOP*/}
        <Link passHref href="/profile">
          <LinkButton>Username</LinkButton>
        </Link>
      </ButtonWrapper>

      <NavIcon onClick={handleNavOpen} />
    </NavbarWrapper>
  );
};

export default Navbar;
