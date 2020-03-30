import React from 'react';
import NarrowFrame from '../NarrowFrame';
import Description from '../Description';

import './style.scss';

interface WorkProps {
  img?: string;
  title: string;
  tags: string[];
}

const Work:React.FC<WorkProps> = ({ img, title, tags, children }) => {
  return (
    <div className="Work">
      <NarrowFrame>
        <img src={img} alt={title} />
      </NarrowFrame>
      <Description 
        title={title}
        tags={tags}
        children={children} />
    </div>
  );
};

export default Work;