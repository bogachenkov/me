import React from 'react';
import './style.scss';

interface WideFrameProps {
  white?: boolean;
  centered?: boolean;
}

const WideFrame: React.FC<WideFrameProps> = ({ children, white = false, centered = false }) => {
  return (
    <div className={`WideFrame ${white ? 'WideFrame-white' : ''}`}>
      <div className={`WideFrame--content ${centered ? 'centered' : ''}`}>
        { children }
      </div>
    </div>
  );
};

export default WideFrame;