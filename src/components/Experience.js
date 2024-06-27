import React from 'react';
import styled from 'styled-components';

const ExperienceContainer = styled.section`
  padding: 20px;
  text-align: center;
`;

const ExperienceList = styled.ul`
  padding: 0;
  list-style: disc;
  list-style-position: inside;
  margin: 0 auto;
  display: inline-block;
  text-align: left;
`;

const ExperienceItem = styled.li`
  margin: 10px 0;
`;

const Experience = () => {
  return (
    <ExperienceContainer>
      <h2>Experience</h2>
      <p>Web Design and Coding Teacher at Global Scholars Academy, Durham.</p>
      <ExperienceList>
        <ExperienceItem>
          Teaching high school and middle school students the principles of coding and web design.
        </ExperienceItem>
        <ExperienceItem>
          Responsible for building the curriculum and daily assignments for students.
        </ExperienceItem>
        <ExperienceItem>
          Assisted in developing the web design and coding program at the school.
        </ExperienceItem>
        <ExperienceItem>
          Introduced students to different coding languages such as HTML, JavaScript, and others.
        </ExperienceItem>
      </ExperienceList>
      <p>Junior Web Designer at Role Model Agency.</p>
      <p>Project Support Coordinator at Grundfos Solutions.</p>
    </ExperienceContainer>
  );
};

export default Experience;
