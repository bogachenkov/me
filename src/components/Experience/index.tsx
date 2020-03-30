import React from 'react';
import Timeline from '../Timeline/Timeline';
import UnderlinedTitle from '../ui/UnderlinedTitle';

const Experience:React.FC = () => {
  return (
    <div>
      <UnderlinedTitle>Опыт работы</UnderlinedTitle>
      <Timeline />
    </div>
  );
};

export default Experience;