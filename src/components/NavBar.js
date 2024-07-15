import React from 'react';
import styled from 'styled-components';
import colors from '../styles/styles';

const Nav = styled.nav`
  background-color: ${colors.VerveBlack};
  color: white;
  width: 100%;
  height: 165.2px;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: 0 63.5px;
`;

const NavLogo = styled.a`
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 1.5;
  letter-spacing: 0;
  text-decoration: none;
  text-align: center;
  color: white;
`;

const Placeholder = styled.div`
  width: 46px;
`;

const MenuIcon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 27px;
  cursor: pointer;
`;

const Bar = styled.div`
  width: 46px;
  height: 3px;
  border-radius: 3px;
  background-color: white;
`;

const NavBar = () => {
  return (
    <Nav>
      <NavContainer>
        <Placeholder />
        <NavLogo href="/">The Coffee Shop</NavLogo>
        <MenuIcon>
          <Bar />
          <Bar />
          <Bar />
        </MenuIcon>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;