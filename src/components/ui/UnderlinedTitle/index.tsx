import React from 'react';
import './style.scss';

const UnderlinedTitle:React.FC = ({ children }) => {
  return (
    <h1 className="UnderlinedTitle">
      { children }
    </h1>
  );
};

export default UnderlinedTitle;