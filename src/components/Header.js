import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  text-align: center;
  padding: 20px;
  background-color: #4A4A4A;
  color: white;
`;

const Header = () => {
  return (
    <HeaderContainer>
      <h1>Magda Rofail</h1>
      <h2>Web Developer</h2>
    </HeaderContainer>
  );
};

export default Header;
