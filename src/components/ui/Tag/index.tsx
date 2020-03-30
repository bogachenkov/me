import React from 'react';

import './style.scss';

const Tag:React.FC = ({ children }) => {
  return (
    <span className="Tag">
      { children }
    </span>
  );
};

export default Tag;