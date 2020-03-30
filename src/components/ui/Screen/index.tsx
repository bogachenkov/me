import React from 'react';
import './style.scss';

interface ScreenProps {
  id: string;
  bgColor?: string;
}

const Screen: React.FC<ScreenProps> = ({ children, id, bgColor = '#ffffff' }) => {
  return (
    <section id={id} className="section">
      <div className="Screen" style={{ backgroundColor: bgColor }}>
        { children }
      </div>
    </section>
  );
};

export default Screen;