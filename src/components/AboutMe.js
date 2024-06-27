import React from 'react';
import styled from 'styled-components';
import profileImage from './profile.jpg'; // Ensure the image is in the same directory

const AboutMeContainer = styled.section`
  padding: 20px;
  text-align: center;
  background-color:#F2F3F4;
`;

const ProfileImageStyled = styled.img`
  width: 200px;
  border-radius: 50%;
`;

const AboutMe = () => {
    return (
        <AboutMeContainer>
            <ProfileImageStyled src={profileImage} alt="Magda Rofail" />
            <h2>About Me</h2>
            <p>
                Hi, I am Magda Rofail, a Web Developer. 

<p> Key Qualifications & Responsibilities:
                Implemented websites, mobile applications, and landing pages from concept through deployment. Standardized all output with a new, responsive, mobile-first approach and strategy. Assessed UX and UI designs for technical feasibility. Developed standard and ad hoc reports in graph format as required. Collaborated with product team members to implement new feature developments. Experienced web developer skilled in all stages of advanced web development.
                Knowledgeable in user interface, testing, and debugging processes. Bringing forth
                expertise in design, installation, testing and maintenance of web systems. Equipped
                with a diverse and promising skill set. Proficient in an assortment of technologies,
                including Visual Design, Wireframes, Web Design, Product Design and UI/UX. Able
                to effectively achieve during independent projects, as well as collaborate in a
                team setting.
</p>
               
            </p>
        </AboutMeContainer>
    );
};

export default AboutMe;
