import React from 'react';
import SkillDots from '../../SkillDots';

import './style.scss';

interface SkillsItemProps {
  skill: {
    label: string;
    level: number;
  }
}

const SkillsItem:React.FC<SkillsItemProps> = ({ skill: { label, level } }) => {
  return (
    <div className="SkillsItem">
      <p className="SkillsItem--label">{label}</p>
      <SkillDots filled={level} />
    </div>
  );
};

export default SkillsItem;