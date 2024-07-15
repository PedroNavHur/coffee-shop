import React from 'react';
import styled from 'styled-components';
import NavBar from '../components/NavBar';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <NavBar />
      {children}
    </LayoutContainer>
  );
}

export default Layout;