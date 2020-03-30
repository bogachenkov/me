import React from 'react';

import './style.scss';

import UnderlinedTitle from '../ui/UnderlinedTitle';
import TagList from '../TagList';

interface DescriptionProps {
  title: string;
  tags: string[];
}

const Description:React.FC<DescriptionProps> = ({ title, tags, children }) => {
  return (
    <div className="Description">
      <UnderlinedTitle>{title}</UnderlinedTitle>
      <TagList tags={tags} />
     { children }
    </div>
  );
};

export default Description;