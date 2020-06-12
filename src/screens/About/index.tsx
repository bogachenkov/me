import React from 'react';

import './style.scss';

import Container from '../../components/ui/Container';
import Screen from '../../components/ui/Screen';
import Experience from '../../components/Experience';
import Skills from '../../components/Skills';

const About:React.FC = () => {
  return (
    <Screen id="about" bgColor="#f2f2f2">
      <Container> 
        <div className="About">
          <Experience />
          <Skills />
        </div>
      </Container>
    </Screen>
  );
};

export default React.memo(About);