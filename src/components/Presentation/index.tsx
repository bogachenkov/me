import React from 'react';
import './style.scss';

import githubIcon from '../../images/svg/github_white.svg';
import mailIcon from '../../images/svg/mail_white.svg';

const Presentation:React.FC = () => {
  return (
    <div className="Presentation">
      <h3>Frontend разработчик</h3>
      <h4>Никита Богаченков</h4>
      <a href="https://github.com/bogachenkov" target="_blank" title="Мой профиль на Github" rel="noopener noreferrer">
        <img src={githubIcon} height={32} alt="Github" />
      </a>
      <a href="mailto:nabogachenkov@gmail.com" title="Отправить мне Email" rel="noopener noreferrer">
        <img src={mailIcon} height={32} alt="Mail" />
      </a>
    </div>
  );
};

export default Presentation;