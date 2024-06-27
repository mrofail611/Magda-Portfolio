// src/components/Projects.js
import React from 'react';
import styled from 'styled-components';
import project1Image from '../images/project1.jpg';
import project2Image from '../images/project2.jpg';
import project3Image from '../images/project3.jpg';

const ProjectsContainer = styled.section`
  padding: 20px;
`;

const ProjectCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  text-align: center;
  background-color:#F2F3F4;
  width: 100%;
`;

const ProjectImage = styled.img`
  width: 80%;
  height: auto;
  border-radius: 8px;
   background-color:#282c34;
`;

const Projects = () => {
  return (
    <ProjectsContainer>
      <h2>Projects</h2>
      <ProjectCard>
        <h3>Project One/Pleasure Island website</h3>
        <ProjectImage src={project1Image} alt="Project One" />
        <p>Designed website to introduce Hanover county, NC to visitors and locals.
Designed the website using HTML, CSS and Bootstrap.
Design demonstrates the ability to use Boostrap as a front-end framework.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project Two/Tyrell County website</h3>
        <ProjectImage src={project2Image} alt="Project Two" />
        <p>Designed a website to introduce Tyrell county, NC to visitors and locals in Eastern NC.
Design was made using HTML, CSS and Bootstrap and demonstrates expert use of these platforms.
Utilized responsive design and the hamburger menu to help navigate the website on a small screen like tablets and cell phones.</p>
      </ProjectCard>
      <ProjectCard>
        <h3>Project Three/Life Style Fitness website</h3>
        <ProjectImage src={project3Image} alt="Project Three" />
        <p>Designed an interactive website for a fitness Gym.
Design was made using CMS (Joomla).
Design demonstrates experience with using Joomla platform.</p>
      </ProjectCard>
    </ProjectsContainer>
  );
};

export default Projects;