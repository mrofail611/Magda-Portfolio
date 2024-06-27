import React from 'react';
import styled from 'styled-components';

const SkillsContainer = styled.section`
  padding: 20px;
`;

const SkillBar = styled.div`
  margin: 20px 0;
`;

const SkillName = styled.div`
  font-weight: bold;
`;

const ProgressBar = styled.div`
  height: 20px;
  background-color: #f3f3f3;
  border-radius: 10px;
  overflow: hidden;
`;

const Progress = styled.div`
  height: 100%;
  background-color: #FFA500;
  text-align: right;
  padding-right: 10px;
  line-height: 20px;
  color: white;
  border-radius: 10px;
`;

const skillsData = [
  { skill: 'HTML', level: 85 },
  { skill: 'CSS', level: 80 },
  { skill: 'BootStrap', level: 70 },
  { skill: 'JavaScript', level: 90 },
  { skill: 'React', level: 75 },
  { skill: 'Node.js', level: 70 },
];

const Skills = () => {
  return (
    <SkillsContainer>
      <h2>Skills</h2>
      {skillsData.map((item, index) => (
        <SkillBar key={index}>
          <SkillName>{item.skill}</SkillName>
          <ProgressBar>
            <Progress style={{ width: `${item.level}%` }}>
              {item.level}%
            </Progress>
          </ProgressBar>
        </SkillBar>
      ))}
    </SkillsContainer>
  );
};

export default Skills;

