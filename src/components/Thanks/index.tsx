import React from 'react';

import githubIcon from '../../images/svg/github_white.svg';
import mailIcon from '../../images/svg/mail_white.svg';

import './style.scss';

const Thanks:React.FC = () => {
  return (
    <div className="Thanks">
      <h1>Благодарю за просмотр!</h1>
      <div className="Thanks--link">
        <img src={githubIcon} height={48} alt="Github" />
        <p>Мой профиль на Github:</p>
        <a href="https://github.com/bogachenkov" target="_blank" title="Мой профиль на Github" rel="noopener noreferrer">
          https://github.com/bogachenkov
        </a>
      </div>
      <div className="Thanks--link">
        <img src={mailIcon} height={48} alt="Github" />
        <p>Мой Email:</p>
        <a href="mailto:nabogachenkov@gmail.com" title="Отправить мне Email" rel="noopener noreferrer">
          nabogachenkov@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Thanks;