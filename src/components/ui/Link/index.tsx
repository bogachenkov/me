import React from 'react';

import './style.scss';

import shareIcon from '../../../images/svg/share-square.svg';
import behanceIcon from '../../../images/svg/behance-square.svg';
import dribbleIcon from '../../../images/svg/dribbble-square.svg';
import githubIcon from '../../../images/svg/github-square.svg';

interface LinkProps {
  href: string;
  title?: string;
}

const Link:React.FC<LinkProps> = ({ href, title = "" }) => {
  const getIcon = ():string => {
    if (href.startsWith('https://dribbble.com')) return dribbleIcon;
    if (href.startsWith('https://www.behance.net')) return behanceIcon;
    if (href.startsWith('https://github.com')) return githubIcon;
    return shareIcon;
  }
  return (
    <a className="Link" href={href} title={title} target="_blank" rel="noopener noreferrer">
      <img src={getIcon()} alt={title} />
      { href }
    </a>
  );
};

export default Link;