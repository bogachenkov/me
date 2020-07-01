import React from 'react';
// @ts-ignore
import ReactFullpage from '@fullpage/react-fullpage';
import 'normalize.css';

import About from './screens/About';
import Header from './screens/Header';
import Portfolio from './screens/Portfolio';
import Footer from './screens/Footer/index';

const App:React.FC = () => {

  // @ts-ignore
  const onSlideChange = ( origin, destination, direction) => {
    const destIgnore = ['header', 'footer'];
    const screen = destination.item;

    if (destIgnore.includes(screen.id)) return;

    if (screen.id === 'about') {
      const TimelineEl = screen.querySelector('.Timeline');
      const TimelineItemEls = screen.querySelectorAll('.TimelineItem');
      const SkillsItem = screen.querySelector('.Skills');
      const SkillDotsEls = screen.querySelectorAll('.SkillDots');

      TimelineEl.classList.add('scale');
      TimelineItemEls.forEach((el: HTMLElement) => {
        el.classList.add('reveal')
      });

      SkillsItem.classList.add('appear')
      SkillDotsEls.forEach((el: HTMLElement) => {
        el.classList.add('rotate')
      });
    } else {
      const NarrowFrameEl = screen.querySelector('.NarrowFrame');
      const DescriptionEl = screen.querySelector('.Description');

      NarrowFrameEl.classList.add('revealFromLeft');
      DescriptionEl.classList.add('revealFromRight');
    }
  }

  return (
    <ReactFullpage
      //responsiveWidth={1440}
      scrollingSpeed={1000}
      easingcss3={'ease-in-out'}
      scrollOverflow={true}
      onLeave={onSlideChange}
      render={ () => (
        <ReactFullpage.Wrapper>
          <Header />
          <About />
          <Portfolio />
          <Footer />
        </ReactFullpage.Wrapper>
      )}
    />
  );
}

export default App;
