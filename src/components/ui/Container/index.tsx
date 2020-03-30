import React from 'react';
import './style.scss';

interface ContainerProps {
  centered?: boolean;
  flexEnd?: boolean;
}

const Container:React.FC<ContainerProps> = ({ children, centered = false, flexEnd = false }) => {
  return (
    <div className={`Container ${centered ? 'centered' : ''} ${flexEnd ? 'flexEnd' : ''}`}>
      { children }
    </div>
  );
};

export default Container;