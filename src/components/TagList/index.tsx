import React from 'react';
import Tag from '../ui/Tag/index';

import './style.scss';

interface TagListProps {
  tags: string[];
}

const TagList:React.FC<TagListProps> = ({ tags }) => {
  return (
    <div className="TagList">
      {
        tags.map(tag => <Tag key={tag}>{ tag }</Tag>)
      }
    </div>
  );
};

export default TagList;