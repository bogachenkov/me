import React, { useState } from 'react';
import './style.scss';

interface SkillDotsProps {
  filled: number;
}

const SkillDots:React.FC<SkillDotsProps> = ({ filled }) => {
  const [ totalDots ] = useState(8);

  const renderDots = ():React.ReactNode[] => {
    const dots: React.ReactNode[] = [];
    
    for (let i = 0; i < totalDots; i++) {
      const isActive = i <= filled - 1;
      if (isActive) {
        dots.push(
          <div key={i} 
            className="SkillDots--item active">
            <div className="SkillDots--item--back"></div>
          </div>
        )
      } else {
        dots.push(
          <div key={i} className="SkillDots--item"></div>
        )
      }
    }

    return dots;
  }

  return (
    <div className="SkillDots">
      { renderDots() }
    </div>
  );
};

export default SkillDots;