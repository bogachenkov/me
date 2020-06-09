import React, { useState } from 'react';

import UnderlinedTitle from '../ui/UnderlinedTitle';
import SkillsItem from './SkillsItem';

import './style.scss';

const Skills:React.FC = () => {
  const [skills] = useState([
    { label: 'HTML & SCSS', level: 7 },
    { label: 'JavaScript', level: 7 },
    { label: 'React & Redux', level: 7 },
    { label: 'TypeScript', level: 5 },
    { label: 'GraphQL & Apollo', level: 5 },
    { label: 'D3.js', level: 4 },
    { label: 'Webpack', level: 5 },
    { label: 'Git', level: 6 },
  ])
  return (
    <div className="Skills">
      <UnderlinedTitle>Навыки</UnderlinedTitle>
      <div className="Skills--content">
        {
          skills.map(skill => <SkillsItem key={skill.label} skill={skill} />)
        }
      </div>
    </div>
  );
};

export default Skills;