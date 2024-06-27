import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 20px;
  text-align: center;
  background-color: #282c34; 
  color: white;
`;

const Footer = () => {
    return(
        <FooterContainer>
            <p>Email: mrofail@my.waketech.edu</p>
            <p>Follow Me : <a href="https://www.linkedin.com/in/magda-rofail-5ba46219b/" target="_blank" >
        LinkedIn
      </a></p>
      <p>GitHub Link : <a href="https://github.com/" target="_blank" >
        GitHub
      </a></p>
        </FooterContainer>
    );
};

export default Footer;