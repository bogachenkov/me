import React from 'react';
import './style.scss';

const NarrowFrame:React.FC = ({ children }) => {
  return (
    <div className="NarrowFrame">
      <div className="NarrowFrame--content">
        { children }
      </div>
    </div>
  );
};

export default NarrowFrame;