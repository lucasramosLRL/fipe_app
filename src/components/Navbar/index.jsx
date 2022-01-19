import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  a {
    text-decoration: none;
    font-size: 28px;
    margin: 10px;
  }
`;

const Navbar = () => {
  return (
    <StyledNav> 
      <Link to={'/'}>Home</Link>
    </StyledNav>
  )
}

export default Navbar;